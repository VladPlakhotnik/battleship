import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.5rem;
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 1rem;
  background: var(--background-color);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary-gradient);
  border-radius: var(--border-radius-md);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  ${IconWrapper} {
    margin: 0;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  span {
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: var(--text-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    gap: 2rem;
    padding: 2rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoardWrapper = styled.div`
  flex: 0 0 auto;
  width: 500px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatusWrapper = styled.div`
  flex: 0 0 auto;
  width: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 400px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

export const HelpButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 0.75rem;
  background: var(--primary-gradient);
  color: var(--text-primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  z-index: 10;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    bottom: 2rem;
    right: 2rem;
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  ${IconWrapper} {
    margin: 0;
    font-size: 1rem;
  }

  span {
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 20;
`;

export const HelpModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background: var(--background-color);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  z-index: 30;
  box-shadow: var(--shadow-lg);
  animation: modalFadeIn 0.3s ease;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: var(--card-background);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }

  &:hover {
    background: var(--error-color);
    transform: rotate(90deg);
  }

  ${IconWrapper} {
    margin: 0;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const HelpContent = styled.div`
  color: var(--text-primary);

  h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
    padding-left: 1.25rem;
    position: relative;
    font-size: 0.9rem;
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: 1rem;
      padding-left: 1.5rem;
    }

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--accent-color);
    }
  }

  p {
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const VictoryModal = styled(HelpModal)`
  max-width: 500px;
  background: var(--card-background);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: victoryModalFadeIn 0.5s ease;

  @keyframes victoryModalFadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -60%) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const VictoryContent = styled(HelpContent)`
  text-align: center;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    @media (min-width: 768px) {
      font-size: 2rem;
      margin-bottom: 2rem;
      gap: 1rem;
    }

    ${IconWrapper} {
      color: var(--accent-color);
      font-size: 1.5rem;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
  }
`;

export const VictoryStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 0.75rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
  }
`;

export const StatItem = styled.div`
  text-align: center;

  h3 {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 0.25rem;

    @media (min-width: 768px) {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const VictoryMessage = styled.div`
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.4;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }
`;

export const PlayAgainButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: var(--primary-gradient);
  color: var(--text-primary);
  border: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 1.1rem;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ripple 1s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
`;

export const SoundButton = styled(ProfileButton)`
  margin-left: 1rem;
  padding: 0.5rem;

  @media (min-width: 768px) {
    padding: 0.6rem 1.2rem;
  }
`;

export const VolumeModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: var(--card-background);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  box-shadow: var(--shadow-lg);
  min-width: 200px;
  z-index: 100;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: slideDown 0.2s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    min-width: 100%;
    padding: 1.5rem;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const VolumeControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const VolumeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  label {
    color: var(--text-secondary);
    font-size: 0.9rem;
    min-width: 80px;

    @media (max-width: 768px) {
      font-size: 1rem;
      min-width: auto;
    }
  }

  input[type="range"] {
    flex: 1;
    -webkit-appearance: none;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    outline: none;

    @media (max-width: 768px) {
      height: 6px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      background: var(--accent-color);
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  button {
    padding: 0.5rem 1rem;
    background: var(--primary-gradient);
    color: var(--text-primary);
    border: none;
    border-radius: var(--border-radius-sm);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
    }

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`;

export const SoundControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: static;
  }
`;
