import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameData } from "../types/gameData";

const BOARD_SIZE = 10;

interface Cell {
  hit: boolean;
  ship: string | null;
  hasShip: boolean;
}

export interface GameState {
  board: Cell[][];
  gameData: GameData;
  gameOver: boolean;
  hits: number;
  misses: number;
  sunkShips: string[];
  startTime: number | null;
  endTime: number | null;
}

const createEmptyBoard = (size: number = BOARD_SIZE): Cell[][] => {
  return Array(size)
    .fill(null)
    .map(() =>
      Array(size)
        .fill(null)
        .map(() => ({
          hit: false,
          ship: null,
          hasShip: false,
        }))
    );
};

const initializeBoard = (gameData: GameData): Cell[][] => {
  const board = createEmptyBoard();
  gameData.layout.forEach((ship) => {
    ship.positions.forEach(([x, y]) => {
      board[y][x].ship = ship.ship;
      board[y][x].hasShip = true;
    });
  });
  return board;
};

const initialState: GameState = {
  board: initializeBoard({
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
  }),
  gameData: {
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
  },
  gameOver: false,
  hits: 0,
  misses: 0,
  sunkShips: [],
  startTime: null,
  endTime: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initializeGame: (state) => {
      state.board = initializeBoard(state.gameData);
      state.hits = 0;
      state.misses = 0;
      state.sunkShips = [];
      state.gameOver = false;
      state.startTime = Date.now();
      state.endTime = null;
    },
    makeMove: (state, action: PayloadAction<{ row: number; col: number }>) => {
      const { row, col } = action.payload;
      const cell = state.board[row][col];

      if (cell.hit) return;

      cell.hit = true;
      if (cell.hasShip) {
        state.hits++;
        // Check if ship is sunk
        const ship = state.gameData.layout.find((ship) =>
          ship.positions.some(([x, y]) => x === col && y === row)
        );
        if (ship) {
          const allPositionsHit = ship.positions.every(
            ([x, y]) => state.board[y][x].hit
          );
          if (allPositionsHit && !state.sunkShips.includes(ship.ship)) {
            state.sunkShips.push(ship.ship);
          }
        }
      } else {
        state.misses++;
      }

      // Check if game is over
      const isGameOver =
        state.sunkShips.length === Object.keys(state.gameData.shipTypes).length;
      if (isGameOver) {
        state.gameOver = true;
        state.endTime = Date.now();
      }
    },
  },
});

export const { initializeGame, makeMove } = gameSlice.actions;
export default gameSlice.reducer;
