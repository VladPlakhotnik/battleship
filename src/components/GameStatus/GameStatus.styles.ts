import styled from "styled-components";

interface ShipInfoItemProps {
  isSunk?: boolean;
}

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
    padding: 1rem;
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
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const ShipInfo = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.75rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }
`;

export const ShipInfoItem = styled.div<ShipInfoItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    padding: 0.75rem 0;
  }

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    opacity: 0.7;

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  span {
    font-size: 0.9rem;
    color: var(--text-primary);

    @media (min-width: 768px) {
      font-size: 1rem;
    }

    &:last-child {
      color: ${(props) =>
        props.isSunk ? "var(--success-color)" : "var(--text-secondary)"};
    }
  }
`;

export const SunkShips = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.75rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }
`;

export const ShipList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 0.75rem;
  }
`;

export const ShipItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  color: var(--text-primary);
  text-transform: capitalize;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    gap: 0.75rem;
    font-size: 1rem;
  }

  img {
    width: 20px;
    height: 20px;
    opacity: 0.7;

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ResetButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: var(--primary-gradient);
  color: var(--text-primary);
  border-radius: 0.5rem;
  font-weight: 600;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  transition: opacity 0.2s;

  @media (min-width: 768px) {
    padding: 0.75rem;
    margin-top: 1rem;
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;
