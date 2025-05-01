export interface ShipType {
  size: number;
  count: number;
}

export interface ShipTypes {
  carrier: ShipType;
  battleship: ShipType;
  cruiser: ShipType;
  submarine: ShipType;
  destroyer: ShipType;
}

export interface ShipLayout {
  ship: keyof ShipTypes;
  positions: [number, number][];
}

export interface GameData {
  shipTypes: {
    [key: string]: {
      size: number;
      count: number;
    };
  };
  layout: {
    ship: string;
    positions: [number, number][];
  }[];
}

export interface GameStats {
  totalGames: number;
  wins: number;
  losses: number;
  bestScore: number;
  averageHits: number;
  averageMisses: number;
  totalHits: number;
  totalMisses: number;
}

export interface GameHistory {
  id: string;
  date: string;
  playerName: string;
  result: "win" | "loss";
  hits: number;
  misses: number;
  sunkShips: string[];
  duration: number; // в секундах
}

export interface PlayerProfile {
  name: string;
  stats: GameStats;
  history: GameHistory[];
}

export const initialGameData: GameData = {
  shipTypes: {
    carrier: { size: 5, count: 1 },
    battleship: { size: 4, count: 1 },
    cruiser: { size: 3, count: 1 },
    submarine: { size: 3, count: 1 },
    destroyer: { size: 2, count: 1 },
  },
  layout: [
    {
      ship: "carrier",
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
    },
    {
      ship: "battleship",
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
    },
    {
      ship: "cruiser",
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
    },
    {
      ship: "submarine",
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
    },
    {
      ship: "destroyer",
      positions: [
        [0, 0],
        [1, 0],
      ],
    },
  ],
};
