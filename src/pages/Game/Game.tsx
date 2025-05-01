import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaTrophy,
  FaTimes,
  FaQuestionCircle,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

// Components
import { GameBoard } from "../../components/GameBoard/GameBoard";
import { GameStatus } from "../../components/GameStatus/GameStatus";

// Hooks
import { usePlayerName } from "../../hooks/usePlayerName";
import { useGameStats } from "../../hooks/useGameStats";
import { useSound } from "../../hooks/useSound";

// Store
import { RootState } from "../../store";
import { initializeGame } from "../../store/gameSlice";

// Styles
import {
  AppContainer,
  BoardWrapper,
  CloseButton,
  GameContainer,
  HelpButton,
  HelpContent,
  HelpModal,
  Overlay,
  StatusWrapper,
  Title,
  Header,
  VictoryModal,
  VictoryContent,
  VictoryStats,
  StatItem,
  VictoryMessage,
  PlayAgainButton,
  IconWrapper,
  ProfileButton,
  SoundButton,
  VolumeModal,
  VolumeControl,
  VolumeItem,
  SoundControls,
} from "./Game.styles";

export const GamePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { playerName } = usePlayerName();
  const { updateStats } = useGameStats(playerName);
  const { playVictory, setVolume, volume } = useSound();
  const soundControlsRef = useRef<HTMLDivElement>(null);

  const [showHelp, setShowHelp] = useState(false);
  const [isStatsSaved, setIsStatsSaved] = useState(false);
  const [showVolume, setShowVolume] = useState(false);

  const gameState = useSelector((state: RootState) => state.game);
  const { hits, misses, gameOver, sunkShips, startTime } = gameState;

  useEffect(() => {
    dispatch(initializeGame());
    setIsStatsSaved(false);
  }, [dispatch]);

  useEffect(() => {
    if (gameOver && startTime && !isStatsSaved) {
      const result = sunkShips.length === 5 ? "win" : "loss";
      const duration = Math.floor((Date.now() - startTime) / 1000);

      updateStats({
        result,
        hits,
        misses,
        sunkShips,
        duration,
      });

      if (result === "win") {
        playVictory();
      }

      setIsStatsSaved(true);
    }
  }, [
    gameOver,
    hits,
    misses,
    sunkShips,
    startTime,
    updateStats,
    isStatsSaved,
    playVictory,
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        soundControlsRef.current &&
        !soundControlsRef.current.contains(event.target as Node)
      ) {
        setShowVolume(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleVolumeChange = (value: number) => {
    setVolume(value);
  };

  const handleReset = () => {
    dispatch(initializeGame());
    setIsStatsSaved(false);
  };

  const handleProfileClick = () => navigate("/profile");
  const handleHelpClick = () => setShowHelp(true);
  const handleCloseHelp = () => setShowHelp(false);

  return (
    <AppContainer>
      <Header>
        <ProfileButton onClick={handleProfileClick}>
          <IconWrapper>
            <FaUser />
          </IconWrapper>
          <span>{playerName}</span>
        </ProfileButton>
        <SoundControls ref={soundControlsRef}>
          <SoundButton onClick={() => setShowVolume(!showVolume)}>
            <IconWrapper>
              {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
            </IconWrapper>
          </SoundButton>
          {showVolume && (
            <VolumeModal>
              <VolumeControl>
                <VolumeItem>
                  <label>Volume</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) =>
                      handleVolumeChange(parseFloat(e.target.value))
                    }
                  />
                </VolumeItem>
              </VolumeControl>
            </VolumeModal>
          )}
        </SoundControls>
      </Header>

      <Title>Battleship Game</Title>

      <GameContainer>
        <BoardWrapper>
          <GameBoard />
        </BoardWrapper>
        <StatusWrapper>
          <GameStatus />
        </StatusWrapper>
      </GameContainer>

      <HelpButton onClick={handleHelpClick}>
        <IconWrapper>
          <FaQuestionCircle />
        </IconWrapper>
        <span>How to Play</span>
      </HelpButton>

      {showHelp && (
        <>
          <Overlay onClick={handleCloseHelp} />
          <HelpModal>
            <CloseButton onClick={handleCloseHelp}>
              <FaTimes />
            </CloseButton>
            <HelpContent>
              <h2>How to Play Battleship</h2>
              <ul>
                <li>
                  Click on any cell on the board to fire at that position.
                </li>
                <li>Red cells indicate hits on enemy ships.</li>
                <li>Blue cells indicate misses.</li>
                <li>
                  Try to sink all enemy ships by hitting every cell they occupy.
                </li>
                <li>
                  Use the ship information panel to track remaining ships and
                  their sizes.
                </li>
                <li>The game is won when all ships are sunk!</li>
              </ul>
              <p>Keyboard Navigation:</p>
              <ul>
                <li>Use Tab to navigate between cells</li>
                <li>Press Enter or Space to fire at the selected cell</li>
              </ul>
            </HelpContent>
          </HelpModal>
        </>
      )}

      {gameOver && (
        <>
          <Overlay />
          <VictoryModal>
            <VictoryContent>
              <h2>
                <IconWrapper>
                  <FaTrophy />
                </IconWrapper>
                {sunkShips.length === 5 ? "Victory!" : "Game Over!"}
              </h2>
              <VictoryStats>
                <StatItem>
                  <h3>Hits</h3>
                  <p>{hits}</p>
                </StatItem>
                <StatItem>
                  <h3>Misses</h3>
                  <p>{misses}</p>
                </StatItem>
                <StatItem>
                  <h3>Accuracy</h3>
                  <p>
                    {hits + misses > 0
                      ? Math.round((hits / (hits + misses)) * 100)
                      : 0}
                    %
                  </p>
                </StatItem>
                <StatItem>
                  <h3>Time</h3>
                  <p>
                    {startTime
                      ? `${Math.floor((Date.now() - startTime) / 1000)}s`
                      : "0s"}
                  </p>
                </StatItem>
              </VictoryStats>
              <VictoryMessage>
                <p>Game statistics have been saved to your profile!</p>
                <p>You can view your game history in the profile section.</p>
              </VictoryMessage>
              <PlayAgainButton onClick={handleReset}>
                Play Again
              </PlayAgainButton>
            </VictoryContent>
          </VictoryModal>
        </>
      )}
    </AppContainer>
  );
};
