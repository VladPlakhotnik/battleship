export interface GameSettings {
  playerName: string;
  gameStyle: "classic" | "modern" | "pirate";
  difficulty: "easy" | "medium" | "hard";
  boardSize: 8 | 10 | 12;
  soundEnabled: boolean;
}

export interface GameStats {
  totalGames: number;
  wins: number;
  losses: number;
  accuracy: number;
  bestTime: number;
  totalHits: number;
  totalMisses: number;
  averageMoves: number;
  gameHistory: GameHistory[];
}

export interface GameHistory {
  date: string;
  result: "win" | "loss";
  time: number;
  moves: number;
}
