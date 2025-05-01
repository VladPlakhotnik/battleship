import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProfileContainer = styled.div`
  min-height: 100vh;
  padding: 0rem;
  background: var(--background-color);
  position: relative;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 300px 1fr;
    gap: 2rem;
  }
`;

export const Sidebar = styled.div`
  background: var(--card-background);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  height: fit-content;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const MainContent = styled.div`
  background: var(--card-background);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--primary-gradient);
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--text-primary);
  font-weight: 600;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

export const PlayerName = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-md);
  padding: 0.75rem;
  text-align: center;
  transition: transform 0.2s ease;

  @media (min-width: 768px) {
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.08);

    ${IconWrapper} {
      color: var(--accent-color);
    }
  }
`;

export const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
`;

export const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.75rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    margin-top: 1rem;
    font-size: 1rem;
  }

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    @media (min-width: 768px) {
      padding: 0.75rem;
    }
  }

  th {
    color: var(--text-secondary);
    font-weight: 500;
  }

  td {
    color: var(--text-primary);
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const ResultBadge = styled.span<{ result: "win" | "loss" }>`
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${(props) =>
    props.result === "win" ? "var(--success-color)" : "var(--error-color)"};
  color: var(--text-primary);

  @media (min-width: 768px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
  }
`;

export const BackButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: var(--card-background);
  color: var(--text-primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;

  @media (min-width: 768px) {
    top: 2rem;
    left: 2rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  ${IconWrapper} {
    margin: 0;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const PageButton = styled.button<{ disabled?: boolean }>`
  padding: 0.4rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${(props) => (props.disabled ? "#f5f5f5" : "white")};
  color: ${(props) => (props.disabled ? "#999" : "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  &:hover:not(:disabled) {
    background: #f0f0f0;
    border-color: #999;
  }

  &:active:not(:disabled) {
    background: #e0e0e0;
  }
`;

export const PageInfo = styled.span`
  font-size: 0.8rem;
  color: #666;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ResetButton = styled.button`
  padding: 0.5rem 1rem;
  background: var(--error-color);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.9;
  }

  ${IconWrapper} {
    margin: 0;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const EmptyHistory = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-lg);
  margin: 0.75rem 0;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
    margin: 1rem 0;
  }

  p {
    color: var(--text-secondary);
    margin: 0.5rem 0;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    &:first-child {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-primary);

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }
    }
  }
`;
