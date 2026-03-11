"use client";
import { AtBatResult, RESULT_LABELS } from "@/lib/gameLogic";
import { Player } from "@/lib/gameData";
import { DeviceType } from "@/lib/useDevice";

interface Props {
  result: AtBatResult;
  isStrikeout: boolean;
  chain: Player[];
  optimalPath: string[];
  par: number;
  linksUsed: number;
  foulBalls: number;
  device: DeviceType;
  onClose: () => void;
}

const RESULT_COLORS: Record<AtBatResult | "strikeout", string> = {
  "home-run": "text-yellow-400",
  triple: "text-orange-400",
  double: "text-blue-400",
  single: "text-green-400",
  "hit-by-pitch": "text-yellow-300",
  walk: "text-gray-300",
  "in-progress": "text-white",
  strikeout: "text-red-500",
};

export default function ResultModal({
  result, isStrikeout, chain, optimalPath, par, linksUsed, foulBalls, device, onClose,
}: Props) {
  const isMobile = device === "mobile";
  const resultKey = isStrikeout ? "strikeout" : result;
  const colorClass = RESULT_COLORS[resultKey];

  const inner = (
    <div
      className={`bg-gray-900 border border-gray-700 w-full
        ${isMobile ? "rounded-t-3xl p-6 pb-10" : "rounded-2xl p-6 max-w-lg"}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Drag handle on mobile */}
      {isMobile && (
        <div className="w-10 h-1 bg-gray-600 rounded-full mx-auto mb-5" />
      )}

      <div className={`font-black text-center mb-1 ${colorClass} ${isMobile ? "text-4xl" : "text-3xl"}`}>
        {isStrikeout ? "⚾ STRIKEOUT" : RESULT_LABELS[result]}
      </div>

      <div className={`text-center text-gray-400 mb-5 ${isMobile ? "text-base" : "text-sm"}`}>
        {linksUsed} links · {foulBalls} strike{foulBalls !== 1 ? "s" : ""} · Par {par}
      </div>

      <div className="mb-4">
        <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Your Chain</div>
        <div className="flex flex-wrap gap-x-1 gap-y-1">
          {chain.map((p, i) => (
            <span key={i} className="text-sm text-white">
              {p.name}{i < chain.length - 1 ? " →" : ""}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
          Optimal Path (Par {par})
        </div>
        <div className="flex flex-wrap gap-x-1 gap-y-1">
          {optimalPath.map((name, i) => (
            <span key={i} className="text-sm text-yellow-300">
              {name}{i < optimalPath.length - 1 ? " →" : ""}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onClose}
        className={`w-full bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-black font-bold rounded-xl transition
          ${isMobile ? "py-4 text-lg" : "py-3 text-base"}`}
      >
        Done
      </button>
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-end z-50" onClick={onClose}>
        {inner}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      {inner}
    </div>
  );
}
