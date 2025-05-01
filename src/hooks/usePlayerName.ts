import { useState, useEffect } from "react";

const PLAYER_NAME_KEY = "battleship_player_name";

export const usePlayerName = () => {
  const [playerName, setPlayerName] = useState<string>(() => {
    return localStorage.getItem(PLAYER_NAME_KEY) || "";
  });

  const updatePlayerName = (name: string) => {
    setPlayerName(name);
    if (name.trim()) {
      localStorage.setItem(PLAYER_NAME_KEY, name.trim());
    } else {
      localStorage.removeItem(PLAYER_NAME_KEY);
    }
  };

  return {
    playerName,
    setPlayerName: updatePlayerName,
    hasPlayerName: Boolean(playerName.trim()),
  };
};
