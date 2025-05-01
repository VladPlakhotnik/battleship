import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayerName } from "../../hooks/usePlayerName";
import AuthModal from "../../components/AuthModal/AuthModal";
import {
  IntroContainer,
  Content,
  Title,
  Subtitle,
  StartButton,
  ShipImage,
  WavesContainer,
} from "./Main.styles";
import battleshipImage from "../../assets/Battleship Shape.png";

export const MainPage: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();
  const { hasPlayerName } = usePlayerName();

  const handleStartClick = () => {
    if (hasPlayerName) {
      navigate("/game");
    } else {
      setShowAuth(true);
    }
  };

  return (
    <IntroContainer>
      <Content>
        <ShipImage src={battleshipImage} alt="Battleship" />
        <Title>Battleship</Title>
        <Subtitle>
          Welcome to the ultimate naval warfare experience! Test your strategic
          skills in this classic game of battleship. Can you sink all enemy
          ships before they find yours?
        </Subtitle>
        <StartButton onClick={handleStartClick}>Start Game</StartButton>
      </Content>
      <WavesContainer>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </WavesContainer>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </IntroContainer>
  );
};
