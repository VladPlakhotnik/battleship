import { configureStore } from "@reduxjs/toolkit";
import gameReducer, { GameState } from "./gameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export interface RootState {
  game: GameState;
}

export type AppDispatch = typeof store.dispatch;
