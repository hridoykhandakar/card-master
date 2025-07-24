import { JSX, useRef, useEffect } from "react";
import CalculationRow from "@/components/ui/CalculationRow";
import type { TeamState } from "@/types/game";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ScoreTableProps {
  team1: TeamState;
  team2: TeamState;
  team1Name: string;
  team2Name: string;
}

export default function ScoreTable({
  team1,
  team2,
  team1Name,
  team2Name,
}: ScoreTableProps): JSX.Element {
  // Create a ref for the scroll area
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Effect to scroll to bottom when calculations change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [team1.calculations.length, team2.calculations.length]);

  return (
    <div className="h-full">
      <div className="h-full flex flex-col rounded-lg border border-slate-700 shadow-md bg-slate-900">
        {/* Header - Fixed */}
        <div className="grid grid-cols-2 text-center">
          <div className="bg-blue-600 rounded-tl-md p-3 font-semibold text-white text-lg md:text-xl">
            {team1Name}
          </div>
          <div className="bg-purple-600 rounded-tr-md p-3 font-semibold text-white text-lg md:text-xl">
            {team2Name}
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-grow overflow-hidden">
          <ScrollArea 
            ref={scrollAreaRef} 
            className="h-full bg-slate-900 p-3 text-base md:text-lg"
          >
            {team1.calculations.length === 0 &&
            team2.calculations.length === 0 ? (
              <div className="grid grid-cols-2 divide-x divide-slate-700 h-full">
                <div className="p-3 text-center text-slate-400 text-base md:text-lg">
                  No scores yet
                </div>
                <div className="p-3 text-center text-slate-400 text-base md:text-lg">
                  No scores yet
                </div>
              </div>
            ) : (
              <div className="bg-slate-900">
                {Array.from({
                  length: Math.max(
                    team1.calculations.length,
                    team2.calculations.length
                  ),
                }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="grid grid-cols-2 divide-x divide-slate-700 hover:bg-slate-800"
                  >
                    <CalculationRow
                      index={index + 1}
                      calculation={
                        team1.calculations[index] || { a: 0, b: 0, result: 0 }
                      }
                      isEmpty={index >= team1.calculations.length}
                    />
                    <CalculationRow
                      index={index + 1}
                      calculation={
                        team2.calculations[index] || { a: 0, b: 0, result: 0 }
                      }
                      isEmpty={index >= team2.calculations.length}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>
        
        {/* Footer - Fixed */}
        <div className="grid grid-cols-2 divide-x divide-slate-700 bg-slate-800 rounded-b-md">
          <div className="p-3  text-center font-semibold text-base md:text-lg">
            <span className="text-white">Total: </span>
            <span className={team1.total >= 0 ? "text-white" : "text-red-400"}>
              {team1.total}
            </span>
          </div>
          <div className="p-3 text-center font-semibold text-base md:text-lg">
            <span className="text-white">Total: </span>
            <span className={team2.total >= 0 ? "text-white" : "text-red-400"}>
              {team2.total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
