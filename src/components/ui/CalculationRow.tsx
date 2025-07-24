import { JSX } from "react";
import type { Calculation } from "@/types/game";

interface CalculationRowProps {
  index: number;
  calculation: Calculation;
  isEmpty: boolean;
}

export default function CalculationRow({
  index,
  calculation,
  isEmpty,
}: CalculationRowProps): JSX.Element {
  const { a, b, result } = calculation;
  const isNegative = result < 0;
  const operator = b >= 0 ? "+" : "";

  if (isEmpty) {
    return <div className="p-1 text-sm bg-slate-900"></div>;
  }

  return (
    <div className="p-2 border-b border-gray-600 text-[14px] grid grid-cols-[auto_1fr_auto] items-center gap-1 bg-slate-900">
      <span
        className={`font-medium ${isNegative ? "text-red-400" : "text-white"}`}
      >
        {index}:
      </span>
      <div className="text-center">
        <span className={b < 0 ? "text-red-400" : "text-white"}>
          {a}
          {operator}
          {b} =
        </span>
      </div>
      <span
        className={`font-medium ${isNegative ? "text-red-400" : "text-white"}`}
      >
        {result}
      </span>
    </div>
  );
} 