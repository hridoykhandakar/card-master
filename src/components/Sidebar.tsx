import { JSX, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  History,
  Menu,
  X,
  LogOut,
  Calendar,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { loadGameHistory } from "@/utils/storage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface GameHistoryItem {
  date: Date;
  team1Name: string;
  team2Name: string;
  team1Score: number;
  team2Score: number;
  winner: string;
}

interface SidebarProps {
  onNewGame: () => void;
}

export default function Sidebar({
  onNewGame,
}: SidebarProps): JSX.Element {
  const [gameHistory, setGameHistory] = useState<GameHistoryItem[]>([]);

  // Load game history on component mount
  useEffect(() => {
    setGameHistory(loadGameHistory());
  }, []);

  // Function to handle creating a new game
  const handleNewGame = () => {
    onNewGame();
  };

  // Function to handle clearing game history
  const handleClearHistory = () => {
    if (window.confirm("Are you sure you want to clear your game history?")) {
      localStorage.removeItem("gameHistory");
      setGameHistory([]);
    }
  };

  // Format date for display
  const formatDate = (date: Date): string => {
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      return new Date(date).toLocaleDateString();
    }
  };

  // Game history component
  const GameHistoryList = () => (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold text-white">Game History</p>
        {gameHistory.length > 0 && (
          <Badge
            variant="outline"
            className="text-xs bg-slate-700 text-slate-200 border-slate-600"
          >
            {gameHistory.length} games
          </Badge>
        )}
      </div>
      {gameHistory.length === 0 ? (
        <div className="text-center py-4 text-slate-400 text-base">
          No game history available
        </div>
      ) : (
        <ScrollArea className="max-h-[350px] no-scrollbar overflow-y-auto rounded-lg border border-slate-700 bg-slate-900 shadow-inner">
          <div className="p-2 space-y-3">
            {gameHistory.map((game, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 shadow-sm"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center text-xs text-slate-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(game.date)}
                  </div>
                  <span className="text-xs font-bold text-yellow-400">
                    {game.winner}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-semibold text-slate-200">{game.team1Name}</div>
                  <div className="text-base font-bold text-blue-400">
                    {game.team1Score}
                    <span className="text-slate-400 font-normal"> - </span>
                    {game.team2Score}
                  </div>
                  <div className="text-sm font-semibold text-slate-200">{game.team2Name}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden fixed top-[10px] left-2 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-slate-800 border-slate-700 text-white h-8 w-8"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[85%] max-w-[300px] p-0 bg-slate-900 border-r border-slate-700"
          >
            <div className="flex flex-col h-full bg-slate-900 text-white">
              <div className="p-3 border-b border-slate-700 flex items-center justify-between">
                <h2 className="text-xl font-bold">Card Master</h2>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-400 h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </SheetClose>
              </div>
              <div className="p-3 flex flex-col gap-2">
                <SheetClose asChild>
                  <Button
                    variant="default"
                    className="w-full justify-start bg-blue-600 hover:bg-blue-700 py-2 text-sm"
                    onClick={handleNewGame}
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Game
                  </Button>
                </SheetClose>
              </div>
              <Separator className="bg-slate-700" />
              <div className="p-3 flex flex-col gap-2 flex-1 overflow-y-auto">
                <GameHistoryList />
                <Button
                  variant="outline"
                  className="w-full justify-start border-red-700 text-red-500 py-2 bg-gray-300 text-sm"
                  onClick={handleClearHistory}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Clear History
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-slate-900 border-r border-slate-700">
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Header */}
          <div className="p-4 bg-slate-800">
            <h2 className="text-xl font-bold text-white">Card Master</h2>
          </div>
          {/* Menu Items */}
          <div className="flex-1 py-4">
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-6 text-left text-white"
              onClick={handleNewGame}
            >
              <PlusCircle className="mr-3 h-5 w-5" />
              Create New Game
            </Button>
            {/* Game History Section */}
            <GameHistoryList />
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-left text-sm text-red-400"
              onClick={handleClearHistory}
            >
              <History className="mr-2 h-4 w-4" />
              Clear History
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
