"use client";
import { Player } from "@/lib/gameData";
import { DeviceType } from "@/lib/useDevice";

interface Props {
  player: Player;
  showTeams: boolean;
  isStart?: boolean;
  isEnd?: boolean;
  device: DeviceType;
}

export default function PlayerCard({ player, showTeams, isStart, isEnd, device }: Props) {
  const isMobile = device === "mobile";

  return (
    <div className={`rounded-xl border-2 text-center
      ${isMobile ? "w-full px-4 py-3" : "min-w-[160px] max-w-[200px] px-4 py-4"}
      ${isStart || isEnd ? "border-yellow-400 bg-yellow-950/30" : "border-green-500 bg-green-950/30"}`}
    >
      <div className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-400">
        {isStart ? "START" : isEnd ? "END" : "✅"}
      </div>
      <div className={`font-bold text-white leading-tight ${isMobile ? "text-base" : "text-sm"}`}>
        {player.name}
      </div>
      {showTeams && (
        <div className="mt-2 space-y-0.5">
          {player.teams.map((t, i) => (
            <div key={i} className="text-xs text-gray-300">
              {t.team} ({t.startYear}–{t.endYear})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
