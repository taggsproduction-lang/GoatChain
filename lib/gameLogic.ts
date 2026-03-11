import { Player, PlayerTeam } from "./gameData";

export type AtBatResult =
  | "home-run"
  | "triple"
  | "double"
  | "single"
  | "hit-by-pitch"
  | "walk"
  | "in-progress";

export interface GameState {
  chain: Player[];           // validated players in order (includes bookends at 0 and last)
  confirmedLinks: Player[];  // last saved chain before a foul ball (for ABS Challenge)
  foulBalls: number;         // wrong guesses this game
  totalLinks: number;        // every guess (right or wrong)
  totalAttempts: number;     // wrong answers + 1 when puzzle completes
  isComplete: boolean;
  isStrikeout: boolean;
  result: AtBatResult;
}

export const MAX_FOUL_BALLS = 3;

export function initGame(startPlayer: Player, endPlayer: Player): GameState {
  return {
    chain: [startPlayer],
    confirmedLinks: [startPlayer],
    foulBalls: 0,
    totalLinks: 0,
    totalAttempts: 0,
    isComplete: false,
    isStrikeout: false,
    result: "in-progress",
  };
}

export function submitGuess(
  state: GameState,
  guessedPlayer: Player,
  endPlayer: Player,
  par: number
): { newState: GameState; valid: boolean; message: string } {
  const currentTip = state.chain[state.chain.length - 1];
  const newLinks = state.totalLinks + 1;

  // Check teammate connection
  const valid = wereTeammates(currentTip, guessedPlayer);

  if (!valid) {
    const newFouls = state.foulBalls + 1;
    const isStrikeout = newFouls >= MAX_FOUL_BALLS;
    return {
      newState: {
        ...state,
        foulBalls: newFouls,
        totalLinks: newLinks,
        totalAttempts: state.totalAttempts + 1,
        isStrikeout,
        result: "in-progress",
        // chain resets to confirmedLinks on foul
        chain: [...state.confirmedLinks],
      },
      valid: false,
      message: isStrikeout
        ? `⚾ Strikeout! ${guessedPlayer.name} never played with ${currentTip.name}.`
        : `Strike! ${guessedPlayer.name} never played with ${currentTip.name}. (${newFouls}/${MAX_FOUL_BALLS} strikes)`,
    };
  }

  const newChain = [...state.chain, guessedPlayer];
  const isComplete = guessedPlayer.id === endPlayer.id;

  if (isComplete) {
    const linksUsed = newChain.length - 1; // links = edges, not nodes
    const result = getAtBatResult(linksUsed, par, state.foulBalls);
    return {
      newState: {
        ...state,
        chain: newChain,
        confirmedLinks: newChain,
        totalLinks: newLinks,
        totalAttempts: state.totalAttempts + 1,
        isComplete: true,
        result,
      },
      valid: true,
      message: `✅ ${guessedPlayer.name} confirmed!`,
    };
  }

  return {
    newState: {
      ...state,
      chain: newChain,
      confirmedLinks: newChain,
      totalLinks: newLinks,
    },
    valid: true,
    message: `✅ ${guessedPlayer.name} confirmed!`,
  };
}

export function useAbsChallenge(state: GameState): GameState {
  return {
    ...state,
    chain: [...state.confirmedLinks],
  };
}

export function getAtBatResult(
  linksUsed: number,
  par: number,
  foulBalls: number
): AtBatResult {
  if (foulBalls > 0) {
    // Any foul ball drops result by one tier
    const over = linksUsed - par + foulBalls;
    return tierFromOver(over);
  }
  return tierFromOver(linksUsed - par);
}

function tierFromOver(over: number): AtBatResult {
  if (over <= 0) return "home-run";
  if (over === 1) return "triple";
  if (over === 2) return "double";
  if (over === 3) return "single";
  if (over === 4) return "hit-by-pitch";
  return "walk";
}

export const RESULT_LABELS: Record<AtBatResult, string> = {
  "home-run": "⚾ HOME RUN",
  triple: "🔺 TRIPLE",
  double: "🔵 DOUBLE",
  single: "🟢 SINGLE",
  "hit-by-pitch": "🟡 HIT BY PITCH",
  walk: "⚪ WALK",
  "in-progress": "",
};

export function wereTeammates(a: Player, b: Player): boolean {
  for (const ta of a.teams) {
    for (const tb of b.teams) {
      if (ta.team === tb.team) {
        const start = Math.max(ta.startYear, tb.startYear);
        const end = Math.min(ta.endYear, tb.endYear);
        if (start <= end) return true;
      }
    }
  }
  return false;
}

export function getSharedTeams(a: Player, b: Player): string[] {
  const shared: string[] = [];
  for (const ta of a.teams) {
    for (const tb of b.teams) {
      if (ta.team === tb.team) {
        const start = Math.max(ta.startYear, tb.startYear);
        const end = Math.min(ta.endYear, tb.endYear);
        if (start <= end) {
          shared.push(
            start === end
              ? `${ta.team} (${start})`
              : `${ta.team} (${start}–${end})`
          );
        }
      }
    }
  }
  return shared;
}

export function formatTeams(teams: PlayerTeam[]): string {
  return teams
    .map((t) =>
      t.startYear === t.endYear
        ? `${t.team} (${t.startYear})`
        : `${t.team} (${t.startYear}–${t.endYear})`
    )
    .join(", ");
}
