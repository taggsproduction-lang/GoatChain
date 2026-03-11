"use client";
import { Player } from "@/lib/gameData";
import { getSharedTeams } from "@/lib/gameLogic";
import { DeviceType } from "@/lib/useDevice";
import PlayerCard from "./PlayerCard";

interface Props {
  chain: Player[];
  endPlayer: Player;
  easyMode: boolean;
  device: DeviceType;
}

export default function ChainDisplay({ chain, endPlayer, easyMode, device }: Props) {
  const isMobile = device === "mobile";
  const chainComplete = chain[chain.length - 1]?.id === endPlayer.id;

  if (isMobile) {
    // Mobile: vertical stack with down arrows
    return (
      <div className="flex flex-col items-stretch gap-1 w-full px-2">
        {chain.map((player, i) => {
          const isStart = i === 0;
          const isEnd = player.id === endPlayer.id;
          const prev = chain[i - 1];
          const shared = prev ? getSharedTeams(prev, player) : [];

          return (
            <div key={i} className="flex flex-col items-center gap-1">
              {i > 0 && (
                <div className="flex flex-col items-center">
                  <div className="text-green-400 text-xl">↓</div>
                  {easyMode && shared.length > 0 && (
                    <div className="text-xs text-green-300 text-center">{shared[0]}</div>
                  )}
                </div>
              )}
              <PlayerCard player={player} showTeams={easyMode} isStart={isStart} isEnd={isEnd} device={device} />
            </div>
          );
        })}

        {!chainComplete && (
          <div className="flex flex-col items-center gap-1">
            <div className="text-gray-500 text-xl">↓ ??? ↓</div>
            <PlayerCard player={endPlayer} showTeams={easyMode} isEnd device={device} />
          </div>
        )}
      </div>
    );
  }

  // Desktop: horizontal row with right arrows
  return (
    <div className="flex flex-wrap items-start justify-center gap-2">
      {chain.map((player, i) => {
        const isStart = i === 0;
        const isEnd = player.id === endPlayer.id;
        const prev = chain[i - 1];
        const shared = prev ? getSharedTeams(prev, player) : [];

        return (
          <div key={i} className="flex items-start gap-2">
            {i > 0 && (
              <div className="flex flex-col items-center pt-4">
                <div className="text-green-400 text-lg">→</div>
                {easyMode && shared.length > 0 && (
                  <div className="text-xs text-green-300 max-w-[100px] text-center leading-tight">
                    {shared[0]}
                  </div>
                )}
              </div>
            )}
            <PlayerCard player={player} showTeams={easyMode} isStart={isStart} isEnd={isEnd} device={device} />
          </div>
        );
      })}

      {!chainComplete && (
        <div className="flex items-center gap-2">
          <div className="text-gray-500 text-lg pt-4">→ ??? →</div>
          <PlayerCard player={endPlayer} showTeams={easyMode} isEnd device={device} />
        </div>
      )}
    </div>
  );
}
