"use client";
import { useState } from "react";
import { getTodaysPuzzle, findPlayerByName } from "@/lib/gameData";
import { initGame, submitGuess, useAbsChallenge, GameState } from "@/lib/gameLogic";
import { useDevice } from "@/lib/useDevice";
import ChainDisplay from "./components/ChainDisplay";
import GuessInput from "./components/GuessInput";
import ResultModal from "./components/ResultModal";

export default function Home() {
  const device = useDevice();
  const isMobile = device === "mobile";
  const puzzle = getTodaysPuzzle();

  const [game, setGame] = useState<GameState>(() =>
    initGame(puzzle.startPlayer, puzzle.endPlayer)
  );
  const [started, setStarted] = useState(false);
  const [easyMode, setEasyMode] = useState(false);
  const [lastMessage, setLastMessage] = useState("");
  const [showResult, setShowResult] = useState(false);

  function handleGuess(name: string) {
    const player = findPlayerByName(name);
    if (!player) {
      setLastMessage(`"${name}" not found. Check spelling or try autocomplete.`);
      return;
    }
    if (game.chain.some((p) => p.id === player.id || p.name.toLowerCase() === player.name.toLowerCase())) {
      setLastMessage(`${player.name} is already in your chain.`);
      return;
    }
    const { newState, message } = submitGuess(game, player, puzzle.endPlayer, puzzle.par);
    setGame(newState);
    setLastMessage(message);
    if (newState.isComplete || newState.isStrikeout) {
      setTimeout(() => setShowResult(true), 600);
    }
  }

  function handleEndPlayerClick() {
    handleGuess(puzzle.endPlayer.name);
  }

  function handleAbsChallenge() {
    setGame((prev) => useAbsChallenge(prev));
    setLastMessage("ABS Challenge used — chain restored.");
  }

  const currentTip = game.chain[game.chain.length - 1];
  const linksUsed = game.chain.length - 1;
  const isOver = game.isComplete || game.isStrikeout;

  return (
    <main className={`relative min-h-screen bg-gray-950 text-white flex flex-col items-center gap-5
      ${isMobile ? "px-0 py-5 pb-24" : "px-6 py-8 max-w-5xl mx-auto"}`}
    >
      {/* Baseball field underlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        <svg viewBox="0 0 800 800" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,100vh)] h-[min(100vw,100vh)] opacity-[0.04]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 150 650 A 370 370 0 0 1 650 650" stroke="white" strokeWidth="2"/>
          <line x1="400" y1="660" x2="150" y2="650" stroke="white" strokeWidth="1.5"/>
          <line x1="400" y1="660" x2="650" y2="650" stroke="white" strokeWidth="1.5"/>
          <polygon points="400,260 540,400 400,540 260,400" stroke="white" strokeWidth="2"/>
          <circle cx="400" cy="400" r="18" stroke="white" strokeWidth="1.5"/>
          <polygon points="400,540 415,555 415,570 385,570 385,555" stroke="white" strokeWidth="1.5"/>
          <rect x="393" y="253" width="14" height="14" stroke="white" strokeWidth="1.5"/>
          <rect x="533" y="393" width="14" height="14" stroke="white" strokeWidth="1.5"/>
          <rect x="253" y="393" width="14" height="14" stroke="white" strokeWidth="1.5"/>
          <path d="M 260 400 A 195 195 0 0 0 540 400" stroke="white" strokeWidth="1" strokeDasharray="4 4"/>
          <circle cx="400" cy="400" r="320" stroke="white" strokeWidth="1" strokeDasharray="2 8"/>
        </svg>
      </div>

      {/* Header */}
      <div className={`text-center ${isMobile ? "px-4" : ""}`}>
        <h1 className={`font-black tracking-tight text-yellow-400 ${isMobile ? "text-2xl" : "text-3xl"}`}>
          ⚾ CHAIN REACTION
        </h1>
        <p className={`text-gray-400 mt-1 ${isMobile ? "text-xs" : "text-sm"}`}>
          Connect{" "}
          <span className="text-white font-semibold">{puzzle.startPlayer.name}</span>
          {" "}→{" "}
          <span className="text-white font-semibold">{puzzle.endPlayer.name}</span>
          {" "}through shared teammates
        </p>
      </div>

      {/* Stats Bar */}
      <div className={`flex items-center gap-6 ${isMobile ? "w-full justify-around px-6 py-3 bg-gray-900 border-y border-gray-800" : ""}`}>
        <div className="text-center">
          <div className={`text-yellow-400 font-bold ${isMobile ? "text-2xl" : "text-lg"}`}>{linksUsed}</div>
          <div className="text-gray-500 text-xs uppercase tracking-wider">Links</div>
        </div>
        <div className="text-center">
          <div className="flex gap-1.5 justify-center mb-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`rounded-full ${isMobile ? "w-4 h-4" : "w-3 h-3"} ${i <= game.foulBalls ? "bg-red-500" : "bg-gray-700"}`} />
            ))}
          </div>
          <div className="text-gray-500 text-xs uppercase tracking-wider">Strikes</div>
        </div>
        <div className="text-center">
          <div className={`text-gray-300 font-bold ${isMobile ? "text-2xl" : "text-lg"}`}>{puzzle.par}</div>
          <div className="text-gray-500 text-xs uppercase tracking-wider">Smallest Chain</div>
        </div>

        {isMobile && (
          <button
            onClick={() => setEasyMode((v) => !v)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
              easyMode ? "bg-blue-600 border-blue-500 text-white" : "bg-transparent border-gray-600 text-gray-400"
            }`}
          >
            {easyMode ? "EASY ✓" : "EASY"}
          </button>
        )}
      </div>

      {/* Easy Mode toggle — desktop only */}
      {!isMobile && (
        <button
          onClick={() => setEasyMode((v) => !v)}
          className={`px-4 py-1.5 rounded-full text-xs font-bold border transition ${
            easyMode ? "bg-blue-600 border-blue-500 text-white" : "bg-transparent border-gray-600 text-gray-400 hover:border-gray-400"
          }`}
        >
          {easyMode ? "EASY MODE ON" : "EASY MODE OFF"}
        </button>
      )}

      {/* Chain Display */}
      <div className={`w-full ${isMobile ? "" : "max-w-4xl overflow-x-auto pb-2"}`}>
        <ChainDisplay
          chain={game.chain}
          endPlayer={puzzle.endPlayer}
          easyMode={easyMode}
          device={device}
          started={started}
          isOver={isOver}
          onStartClick={() => setStarted(true)}
          onEndClick={handleEndPlayerClick}
        />
      </div>

      {/* Feedback message */}
      {lastMessage && (
        <div className={`text-sm px-4 py-2 rounded-lg mx-4 text-center ${
          lastMessage.startsWith("✅")
            ? "bg-green-900/40 text-green-300"
            : lastMessage.includes("Strike") || lastMessage.includes("Strikeout")
            ? "bg-red-900/40 text-red-300"
            : "bg-gray-800 text-gray-300"
        }`}>
          {lastMessage}
        </div>
      )}

      {/* Guess Input — desktop only */}
      {started && !isOver && !isMobile && (
        <div className="max-w-md w-full">
          <GuessInput
            onGuess={handleGuess}
            disabled={isOver}
            currentPlayerName={currentTip.name}
            device={device}
          />
        </div>
      )}

      {/* ABS Challenge — desktop only */}
      {started && !isOver && !isMobile && game.foulBalls > 0 && (
        <button
          onClick={handleAbsChallenge}
          className="text-blue-400 hover:text-blue-300 underline text-xs"
        >
          Use ABS Challenge — restore last valid chain
        </button>
      )}

      {/* Fixed bottom input on mobile */}
      {isMobile && started && !isOver && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 px-4 py-3 z-10">
          <GuessInput
            onGuess={handleGuess}
            disabled={isOver}
            currentPlayerName={currentTip.name}
            device={device}
          />
          {game.foulBalls > 0 && (
            <button onClick={handleAbsChallenge} className="w-full text-center text-xs text-blue-400 mt-2">
              ABS Challenge — restore chain
            </button>
          )}
        </div>
      )}

      {/* Result Modal */}
      {showResult && (
        <ResultModal
          result={game.result}
          isStrikeout={game.isStrikeout}
          chain={game.chain}
          optimalPath={puzzle.optimalPath}
          par={puzzle.par}
          linksUsed={linksUsed}
          foulBalls={game.foulBalls}
          device={device}
          onClose={() => setShowResult(false)}
        />
      )}
    </main>
  );
}
