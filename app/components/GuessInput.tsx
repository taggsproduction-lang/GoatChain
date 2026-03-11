"use client";
import { useState, useRef } from "react";
import { ALL_PLAYERS } from "@/lib/gameData";
import { DeviceType } from "@/lib/useDevice";

interface Props {
  onGuess: (name: string) => void;
  disabled: boolean;
  currentPlayerName: string;
  device: DeviceType;
}

export default function GuessInput({ onGuess, disabled, currentPlayerName, device }: Props) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionMeta, setSuggestionMeta] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = device === "mobile";

  const players = ALL_PLAYERS;

  function getYearRange(player: typeof players[0]) {
    const start = Math.min(...player.teams.map((t) => t.startYear));
    const end = Math.max(...player.teams.map((t) => t.endYear));
    return start === end ? `${start}` : `${start}–${end}`;
  }

  function handleChange(val: string) {
    setInput(val);
    if (val.length < 2) {
      setSuggestions([]);
      return;
    }
    const matches = players
      .filter((p) => p.name.toLowerCase().includes(val.toLowerCase()))
      .slice(0, isMobile ? 5 : 6);
    setSuggestions(matches.map((p) => p.name));
    setSuggestionMeta(matches.map((p) => getYearRange(p)));
  }

  function handleSubmit(name?: string) {
    const value = name ?? input;
    if (!value.trim()) return;
    onGuess(value.trim());
    setInput("");
    setSuggestions([]);
    setSuggestionMeta([]);
    inputRef.current?.focus();
  }

  return (
    <div className={`w-full ${isMobile ? "px-2" : "relative max-w-md"}`}>
      {/* Mobile: suggestions rendered above input, inline (not absolute) */}
      {isMobile && suggestions.length > 0 && (
        <ul className="w-full bg-gray-800 border border-gray-600 rounded-lg overflow-hidden shadow-xl mb-2">
          {suggestions.map((name, i) => (
            <li
              key={name}
              onMouseDown={(e) => { e.preventDefault(); handleSubmit(name); }}
              className="px-4 py-4 flex items-center justify-between text-white hover:bg-gray-700 active:bg-gray-600 cursor-pointer text-base border-b border-gray-700 last:border-0"
            >
              <span>{name}</span>
              <span className="text-gray-400 text-xs ml-3">{suggestionMeta[i]}</span>
            </li>
          ))}
        </ul>
      )}

      <div className={`text-gray-400 mb-2 text-center ${isMobile ? "text-sm" : "text-xs"}`}>
        Who played with{" "}
        <span className="text-white font-semibold">{currentPlayerName}</span>?
      </div>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Type a player name..."
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="words"
          className={`flex-1 px-4 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 disabled:opacity-40
            ${isMobile ? "py-4 text-base" : "py-2 text-sm"}`}
        />
        <button
          onClick={() => handleSubmit()}
          disabled={disabled || !input.trim()}
          className={`bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-black font-bold rounded-lg disabled:opacity-40 transition
            ${isMobile ? "px-5 py-4 text-xl" : "px-4 py-2 text-base"}`}
        >
          →
        </button>
      </div>

      {/* Desktop: absolute dropdown below input */}
      {!isMobile && suggestions.length > 0 && (
        <ul className="absolute top-full mt-1 left-0 right-0 bg-gray-800 border border-gray-600 rounded-lg overflow-hidden z-50 shadow-xl">
          {suggestions.map((name, i) => (
            <li
              key={name}
              onMouseDown={(e) => { e.preventDefault(); handleSubmit(name); }}
              className="px-4 py-2 flex items-center justify-between text-white hover:bg-gray-700 active:bg-gray-600 cursor-pointer text-sm"
            >
              <span>{name}</span>
              <span className="text-gray-400 text-xs ml-3">{suggestionMeta[i]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
