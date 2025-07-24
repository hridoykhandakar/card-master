import { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import useCardMasterGame from "@/hooks/useCardMasterGame";
import ScoreTable from "@/components/ScoreTable";
import TeamControls from "@/components/TeamControls";
import CreateGameDialog from "@/components/CreateGameDialog";
import WinnerDialog from "@/components/WinnerDialog";
import Sidebar from "@/components/Sidebar";

export default function CardMaster(): JSX.Element {
  const [gameState, gameActions] = useCardMasterGame();

  const {
    gameStarted,
    showCreateGame,
    showWinner,
    winningTeam,
    team1Name,
    team2Name,
    winningScore,
    team1,
    team2,
  } = gameState;

  const {
    handleTeam1ValueSelect,
    handleTeam1OperationSelect,
    handleTeam2ValueSelect,
    handleTeam2OperationSelect,
    handleSubmit,
    handleCreateGame,
    handleNewGame,
    setTeam1Name,
    setTeam2Name,
    setWinningScore,
    setShowCreateGame,
    setShowWinner,
  } = gameActions;

  // Check if submit is possible
  const canSubmit: boolean =
    team1.selectedValue !== null &&
    team1.selectedOperation !== null &&
    team2.selectedValue !== null &&
    team2.selectedOperation !== null;
  return (
    <div className="flex h-[100dvh] bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        onNewGame={() => setShowCreateGame(true)}
        // userName={user?.email}
      />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex justify-center items-center p-2">
        <div className="w-full max-w-md flex flex-col gap-3 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-xl h-[calc(100dvh-20px)]">
          {/* Header */}
          <div className="bg-slate-800 p-2 text-center relative">
            <h1 className="text-xl sm:text-3xl font-bold text-white tracking-wide">
              CARD MASTER
            </h1>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
          </div>

          {/* Score Table */}
          <div className="flex-grow overflow-hidden p-2">
            <ScoreTable
              team1={team1}
              team2={team2}
              team1Name={team1Name}
              team2Name={team2Name}
            />
          </div>

          {/* Controls */}
          {gameStarted && !showWinner && (
            <>
              <div className="px-2 grid grid-cols-2 gap-2 relative">
                {/* Team 1 Controls */}
                <TeamControls
                  teamName={team1Name}
                  teamState={team1}
                  opponentState={team2}
                  onValueSelect={handleTeam1ValueSelect}
                  onOperationSelect={handleTeam1OperationSelect}
                />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-700 -translate-x-1/2 "></div>
                {/* Team 2 Controls */}
                <TeamControls
                  teamName={team2Name}
                  teamState={team2}
                  opponentState={team1}
                  onValueSelect={handleTeam2ValueSelect}
                  onOperationSelect={handleTeam2OperationSelect}
                />
              </div>

              {/* Submit Button */}
              <div className="px-2 pb-2">
                <Button
                  variant="outline"
                  className="w-full py-3 text-lg font-bold rounded-md transition-colors duration-150
    disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed
    bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                >
                  Submit
                </Button>
              </div>
            </>
          )}

          {/* New Game Button (when no game is in progress) */}
          {!gameStarted && !showCreateGame && (
            <div className="px-2 pb-2">
              <Button
                variant="default"
                className="w-full py-3 text-base font-medium rounded-md bg-blue-600 hover:bg-blue-700"
                onClick={() => setShowCreateGame(true)}
              >
                <Plus className="w-5 h-5 mr-2" />
                Create New Game
              </Button>
            </div>
          )}

          {/* Create Game Dialog */}
          <CreateGameDialog
            open={showCreateGame}
            onOpenChange={setShowCreateGame}
            team1Name={team1Name}
            team2Name={team2Name}
            winningScore={winningScore}
            setTeam1Name={setTeam1Name}
            setTeam2Name={setTeam2Name}
            setWinningScore={setWinningScore}
            onCreateGame={handleCreateGame}
          />

          {/* Winner Dialog */}
          <WinnerDialog
            open={showWinner}
            onOpenChange={setShowWinner}
            winningTeam={winningTeam}
            score={winningTeam === team1Name ? team1.total : team2.total}
            onNewGame={handleNewGame}
          />
        </div>
      </div>
    </div>
  );
}
