import { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface CreateGameDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  team1Name: string;
  team2Name: string;
  winningScore: number;
  setTeam1Name: (name: string) => void;
  setTeam2Name: (name: string) => void;
  setWinningScore: (score: number) => void;
  onCreateGame: () => void;
}

export default function CreateGameDialog({
  open,
  onOpenChange,
  team1Name,
  team2Name,
  winningScore,
  setTeam1Name,
  setTeam2Name,
  setWinningScore,
  onCreateGame,
}: CreateGameDialogProps): JSX.Element {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Create New Game
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="team1" className="text-sm font-medium">
              Team 1 Name
            </label>
            <Input
              id="team1"
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="team2" className="text-sm font-medium">
              Team 2 Name
            </label>
            <Input
              id="team2"
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="winningScore" className="text-sm font-medium">
              Winning Score
            </label>
            <Input
              id="winningScore"
              type="number"
              min="1"
              value={winningScore.toString()}
              onChange={(e) =>
                setWinningScore(Number.parseInt(e.target.value) || 0)
              }
              className="bg-slate-800 border-slate-700 text-white"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="default"
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={onCreateGame}
          >
            Start Game
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 