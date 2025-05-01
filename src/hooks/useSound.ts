import { useCallback, useState, useRef } from "react";

import hitSound from "../assets/sounds/hit.mp3";
import missSound from "../assets/sounds/miss.wav";
import victorySound from "../assets/sounds/victory.wav";

export const useSound = () => {
  const [volume, setVolumeState] = useState(0.01);
  const audioElements = useRef<{
    hit: HTMLAudioElement | null;
    miss: HTMLAudioElement | null;
    victory: HTMLAudioElement | null;
  }>({
    hit: null,
    miss: null,
    victory: null,
  });

  const getAudio = (type: "hit" | "miss" | "victory"): HTMLAudioElement => {
    if (!audioElements.current[type]) {
      const audio = new Audio();
      audio.src =
        type === "hit" ? hitSound : type === "miss" ? missSound : victorySound;
      audio.volume = volume;
      audioElements.current[type] = audio;
    }
    return audioElements.current[type]!;
  };

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(newVolume);
    Object.values(audioElements.current).forEach((audio) => {
      if (audio) {
        audio.volume = newVolume;
      }
    });
  }, []);

  const playHit = useCallback(() => {
    const audio = getAudio("hit");
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, []);

  const playMiss = useCallback(() => {
    const audio = getAudio("miss");
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, []);

  const playVictory = useCallback(() => {
    const audio = getAudio("victory");
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, []);

  return {
    playHit,
    playMiss,
    playVictory,
    setVolume,
    volume,
  };
};
