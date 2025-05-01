import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const waveAnimation = keyframes`
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
`;

export const IntroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: var(--background-color);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: var(--primary-gradient);
    filter: blur(80px);
    opacity: 0.15;
    z-index: 0;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }

  &::before {
    top: -100px;
    right: -100px;

    @media (max-width: 768px) {
      top: -50px;
      right: -50px;
    }
  }

  &::after {
    bottom: -100px;
    left: -100px;

    @media (max-width: 768px) {
      bottom: -50px;
      left: -50px;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`;

export const StartButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  background: var(--primary-gradient);
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    padding: 1rem 3rem;
    font-size: 1.25rem;
    width: auto;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);

    &::before {
      transform: translateX(100%);
    }
  }
`;

export const ShipImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 1.5rem;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));

  @media (min-width: 768px) {
    width: 200px;
    margin-bottom: 2rem;
  }
`;

export const WavesContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;

    @media (min-width: 768px) {
      height: 150px;
    }
  }

  .shape-fill {
    fill: var(--accent-color);
    opacity: 0.1;
  }
`;

export const WaveAnimation = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 150px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(var(--accent-color-rgb), 0.2)
  );
  transform-origin: bottom;
  animation: ${waveAnimation} 10s linear infinite;

  @media (min-width: 768px) {
    height: 200px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: inherit;
    animation: inherit;
  }

  &::before {
    animation-delay: -5s;
    opacity: 0.5;
  }

  &::after {
    animation-delay: -2.5s;
    opacity: 0.3;
  }
`;
