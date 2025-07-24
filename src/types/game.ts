// Game state types
export interface Calculation {
  a: number;
  b: number;
  result: number;
}

export interface TeamState {
  calculations: Calculation[];
  total: number;
  selectedValue: number | null;
  selectedOperation: "add" | "subtract" | null;
}

export interface GameSettings {
  team1Name: string;
  team2Name: string;
  winningScore: number;
}

export interface GameData extends GameSettings {
  team1: TeamState;
  team2: TeamState;
  gameStarted: boolean;
}
