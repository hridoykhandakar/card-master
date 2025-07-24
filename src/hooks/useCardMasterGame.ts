import { useState, useEffect } from "react";
import type { TeamState, Calculation } from "@/types/game";
import { saveGameHistory, loadGameHistory } from "@/utils/storage";
import confetti from "canvas-confetti";
import { toast } from "sonner";

// Available value options
export const VALUE_OPTIONS: number[] = [5, 7, 8, 10];

// Function to get available values based on opponent's selection
export const getAvailableValues = (opponentValue: number | null): number[] => {
  if (!opponentValue) return VALUE_OPTIONS;
  if (opponentValue === 5) return VALUE_OPTIONS;
  return [5]; // If opponent selected 7, 8, or 10, only 5 is available
};

// Trigger confetti animation
function triggerConfetti(): void {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

export interface GameState {
  // Game state
  gameStarted: boolean;
  showCreateGame: boolean;
  showWinner: boolean;
  winningTeam: string | null;

  // Game settings
  team1Name: string;
  team2Name: string;
  winningScore: number;

  // Game data
  team1: TeamState;
  team2: TeamState;
}

export interface GameActions {
  handleTeam1ValueSelect: (value: number) => void;
  handleTeam1OperationSelect: (operation: "add" | "subtract") => void;
  handleTeam2ValueSelect: (value: number) => void;
  handleTeam2OperationSelect: (operation: "add" | "subtract") => void;
  handleSubmit: () => void;
  handleCreateGame: () => void;
  handleNewGame: () => void;
  setTeam1Name: (name: string) => void;
  setTeam2Name: (name: string) => void;
  setWinningScore: (score: number) => void;
  setShowCreateGame: (show: boolean) => void;
  setShowWinner: (show: boolean) => void;
}

export default function useCardMasterGame(): [GameState, GameActions] {
  // Game state
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [showCreateGame, setShowCreateGame] = useState<boolean>(false);
  const [showWinner, setShowWinner] = useState<boolean>(false);
  const [winningTeam, setWinningTeam] = useState<string | null>(null);

  // Game settings
  const [team1Name, setTeam1Name] = useState<string>("Team 01");
  const [team2Name, setTeam2Name] = useState<string>("Team 02");
  const [winningScore, setWinningScore] = useState<number>(20);

  // Game data
  const [team1, setTeam1] = useState<TeamState>({
    calculations: [],
    total: 0,
    selectedValue: null,
    selectedOperation: null,
  });

  const [team2, setTeam2] = useState<TeamState>({
    calculations: [],
    total: 0,
    selectedValue: null,
    selectedOperation: null,
  });

  // On mount, show create game dialog
  useEffect(() => {
    setShowCreateGame(true);
  }, []);

  // Check for winner and save to history
  useEffect(() => {
    if (gameStarted) {
      let winner = null;
      if (team1.total >= winningScore) {
        winner = team1Name;
      } else if (team2.total >= winningScore) {
        winner = team2Name;
      }
      if (winner) {
        setWinningTeam(winner);
        setShowWinner(true);
        triggerConfetti();
        // Save to game history
        const history = loadGameHistory();
        history.push({
          date: new Date().toISOString(),
          team1Name,
          team2Name,
          team1Score: team1.total,
          team2Score: team2.total,
          winner,
        });
        saveGameHistory(history);
      }
    }
  }, [
    team1.total,
    team2.total,
    winningScore,
    gameStarted,
    team1Name,
    team2Name,
  ]);

  // Handle value selection for team 1
  const handleTeam1ValueSelect = (value: number): void => {
    // Only allow selection if it's available based on team 2's selection
    if (getAvailableValues(team2.selectedValue).includes(value)) {
      setTeam1((prev) => ({ ...prev, selectedValue: value }));
      // If 7, 8, or 10 is selected, auto-set team2's value to 5
      if ([7, 8, 10].includes(value)) {
        setTeam2((prev) => ({ ...prev, selectedValue: 5 }));
      }
    }
  };

  // Handle operation selection for team 1
  const handleTeam1OperationSelect = (operation: "add" | "subtract"): void => {
    setTeam1((prev) => ({ ...prev, selectedOperation: operation }));
  };

  // Handle value selection for team 2
  const handleTeam2ValueSelect = (value: number): void => {
    // Only allow selection if it's available based on team 1's selection
    if (getAvailableValues(team1.selectedValue).includes(value)) {
      setTeam2((prev) => ({ ...prev, selectedValue: value }));
      // If 7, 8, or 10 is selected, auto-set team1's value to 5
      if ([7, 8, 10].includes(value)) {
        setTeam1((prev) => ({ ...prev, selectedValue: 5 }));
      }
    }
  };

  // Handle operation selection for team 2
  const handleTeam2OperationSelect = (operation: "add" | "subtract"): void => {
    setTeam2((prev) => ({ ...prev, selectedOperation: operation }));
  };

  // Calculate the actual value based on the selected value and operation
  const calculateActualValue = (value: number, operation: "add" | "subtract"): number => {
    if (operation === "add") {
      return value === 10 ? 13 : value;
    } else {
      return -value;
    }
  };

  // Handle form submission
  const handleSubmit = (): void => {
    if (
      team1.selectedValue !== null &&
      team1.selectedOperation !== null &&
      team2.selectedValue !== null &&
      team2.selectedOperation !== null
    ) {
      // Calculate potential new scores
      const team1LastCalc = team1.calculations.length > 0
        ? team1.calculations[team1.calculations.length - 1]
        : ({ result: 0 } as Calculation);

      const team2LastCalc = team2.calculations.length > 0
        ? team2.calculations[team2.calculations.length - 1]
        : ({ result: 0 } as Calculation);

      const team1NewValue = calculateActualValue(team1.selectedValue, team1.selectedOperation);
      const team2NewValue = calculateActualValue(team2.selectedValue, team2.selectedOperation);
      
      const team1NewResult = team1LastCalc.result + team1NewValue;
      const team2NewResult = team2LastCalc.result + team2NewValue;

      // Check if the new scores would be equal
      if (team1NewResult === team2NewResult) {
        toast.error("Teams cannot have the same score. Please choose different values or operations.");
        return;
      }

      // Process Team 1
      setTeam1((prev) => ({
        ...prev,
        calculations: [
          ...prev.calculations,
          { a: team1LastCalc.result, b: team1NewValue, result: team1NewResult },
        ],
        total: team1NewResult,
        selectedValue: null,
        selectedOperation: null,
      }));

      // Process Team 2
      setTeam2((prev) => ({
        ...prev,
        calculations: [
          ...prev.calculations,
          { a: team2LastCalc.result, b: team2NewValue, result: team2NewResult },
        ],
        total: team2NewResult,
        selectedValue: null,
        selectedOperation: null,
      }));
    }
  };

  // Create new game
  const handleCreateGame = (): void => {
    setTeam1({
      calculations: [],
      total: 0,
      selectedValue: null,
      selectedOperation: null,
    });

    setTeam2({
      calculations: [],
      total: 0,
      selectedValue: null,
      selectedOperation: null,
    });

    setGameStarted(true);
    setShowCreateGame(false);
  };

  // Start a new game
  const handleNewGame = (): void => {
    setShowCreateGame(true);
    setShowWinner(false);
    setWinningTeam(null);
  };

  return [
    {
      // Game state
      gameStarted,
      showCreateGame,
      showWinner,
      winningTeam,

      // Game settings
      team1Name,
      team2Name,
      winningScore,

      // Game data
      team1,
      team2,
    },
    {
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
    },
  ];
} 