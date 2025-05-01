import { useState, useEffect } from "react";

interface GameStats {
  totalGames: number;
  wins: number;
  losses: number;
  totalHits: number;
  totalMisses: number;
  bestScore: number;
  averageHits: number;
  averageMisses: number;
}

interface GameHistory {
  id: string;
  date: string;
  result: "win" | "loss";
  hits: number;
  misses: number;
  duration: number;
  sunkShips: string[];
}

interface PlayerProfile {
  name: string;
  stats: GameStats;
  history: GameHistory[];
}

const initialStats: GameStats = {
  totalGames: 0,
  wins: 0,
  losses: 0,
  totalHits: 0,
  totalMisses: 0,
  bestScore: 0,
  averageHits: 0,
  averageMisses: 0,
};

export const useGameStats = (playerName: string) => {
  const [profile, setProfile] = useState<PlayerProfile>(() => {
    const savedProfile = localStorage.getItem(`battleship_stats_${playerName}`);
    if (savedProfile) {
      return JSON.parse(savedProfile);
    }
    return {
      name: playerName,
      stats: initialStats,
      history: [],
    };
  });

  useEffect(() => {
    localStorage.setItem(
      `battleship_stats_${playerName}`,
      JSON.stringify(profile)
    );
  }, [profile, playerName]);

  const updateStats = (gameResult: {
    result: "win" | "loss";
    hits: number;
    misses: number;
    duration: number;
    sunkShips: string[];
  }) => {
    setProfile((currentProfile) => {
      const gameHistory: GameHistory = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        ...gameResult,
      };

      const newStats = {
        totalGames: currentProfile.stats.totalGames + 1,
        wins: currentProfile.stats.wins + (gameResult.result === "win" ? 1 : 0),
        losses:
          currentProfile.stats.losses + (gameResult.result === "loss" ? 1 : 0),
        totalHits: currentProfile.stats.totalHits + gameResult.hits,
        totalMisses: currentProfile.stats.totalMisses + gameResult.misses,
        bestScore: Math.max(currentProfile.stats.bestScore, gameResult.hits),
        averageHits:
          (currentProfile.stats.totalHits + gameResult.hits) /
          (currentProfile.stats.totalGames + 1),
        averageMisses:
          (currentProfile.stats.totalMisses + gameResult.misses) /
          (currentProfile.stats.totalGames + 1),
      };

      return {
        ...currentProfile,
        stats: newStats,
        history: [gameHistory, ...currentProfile.history],
      };
    });
  };

  const resetStats = () => {
    setProfile({
      name: playerName,
      stats: initialStats,
      history: [],
    });
  };

  return { profile, updateStats, resetStats };
};
