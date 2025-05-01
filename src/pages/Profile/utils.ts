export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export const calculateAccuracy = (
  totalHits: number,
  totalMisses: number
): number => {
  const totalShots = totalHits + totalMisses;
  return totalShots > 0 ? Math.round((totalHits / totalShots) * 100) : 0;
};

export const calculateWinRate = (wins: number, totalGames: number): string => {
  return totalGames > 0 ? `${Math.round((wins / totalGames) * 100)}%` : "0%";
};
