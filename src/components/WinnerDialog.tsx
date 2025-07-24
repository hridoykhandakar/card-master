import { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface WinnerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  winningTeam: string | null;
  score: number;
  onNewGame: () => void;
}

export default function WinnerDialog({
  open,
  onOpenChange,
  winningTeam,
  score,
  onNewGame,
}: WinnerDialogProps): JSX.Element {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white">
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          <Trophy className="w-16 h-16 text-yellow-400" />
          <h2 className="text-2xl font-bold text-center">
            Congratulations!
          </h2>
          <p className="text-xl text-center">
            {winningTeam} wins with a score of {score}!
          </p>
          <Button
            variant="default"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
            onClick={onNewGame}
          >
            Start New Game
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 