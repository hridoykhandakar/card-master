import { JSX } from "react";
import { Check, X } from "lucide-react";
import type { TeamState } from "@/types/game";
import { VALUE_OPTIONS, getAvailableValues } from "@/hooks/useCardMasterGame";

interface TeamControlsProps {
  teamName: string;
  teamState: TeamState;
  opponentState: TeamState;
  onValueSelect: (value: number) => void;
  onOperationSelect: (operation: "add" | "subtract") => void;
}

export default function TeamControls({
  teamName,
  teamState,
  opponentState,
  onValueSelect,
  onOperationSelect,
}: TeamControlsProps): JSX.Element {
  const availableValues = getAvailableValues(opponentState.selectedValue);

  return (
    <div className="space-y-2">
      {/* Value Selection */}
      <div className="grid grid-cols-2 gap-1">
        {VALUE_OPTIONS.map((value) => (
          <button
            key={`${teamName}-${value}`}
            className={`p-2 rounded-md border ${
              teamState.selectedValue === value
                ? "border-blue-500 bg-blue-500/20 text-white"
                : availableValues.includes(value)
                ? "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
                : "border-slate-700 bg-slate-800/50 text-slate-500 cursor-not-allowed opacity-50"
            } transition-colors font-medium text-base`}
            onClick={() =>
              availableValues.includes(value) && onValueSelect(value)
            }
            disabled={!availableValues.includes(value)}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Operation Selection */}
      <div className="grid grid-cols-2 gap-1">
        <button
          className={`p-2 rounded-md border ${
            teamState.selectedOperation === "add"
              ? "border-emerald-500 bg-emerald-500/20 text-white"
              : "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
          } transition-colors flex justify-center items-center`}
          onClick={() => onOperationSelect("add")}
        >
          <Check strokeWidth={4} className="text-emerald-700 w-5 h-5" />
        </button>
        <button
          className={`p-2 rounded-md border ${
            teamState.selectedOperation === "subtract"
              ? "border-red-500 bg-red-500/20 text-white"
              : "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
          } transition-colors flex justify-center items-center`}
          onClick={() => onOperationSelect("subtract")}
        >
          <X size={20} strokeWidth={4} className="text-red-700 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
