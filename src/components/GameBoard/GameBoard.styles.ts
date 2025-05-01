import styled from "styled-components";

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 4px;
  padding: 1rem;
  background: var(--card-background);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 600px;
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`;

export const Cell = styled.button<{
  $hit: boolean;
  $hasShip: boolean;
}>`
  aspect-ratio: 1;
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: ${(props) => (props.$hit ? "default" : "pointer")};
  transition: all 0.3s ease;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:not(:disabled):hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-sm);
  }

  &:disabled {
    cursor: default;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--accent-color);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background-image: var(--cell-image);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${(props) => (props.$hit ? 1 : 0)};
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`;
