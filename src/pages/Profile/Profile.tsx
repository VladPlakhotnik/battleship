import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayerName } from "../../hooks/usePlayerName";
import { useGameStats } from "../../hooks/useGameStats";
import { Pagination } from "../../components/Pagination/Pagination";
import {
  FaUser,
  FaTrophy,
  FaChartLine,
  FaHistory,
  FaArrowLeft,
  FaTrash,
  FaCrosshairs,
  FaShip,
} from "react-icons/fa";
import {
  formatDate,
  formatTime,
  calculateAccuracy,
  calculateWinRate,
} from "./utils";
import {
  ProfileContainer,
  Content,
  Sidebar,
  MainContent,
  Avatar,
  PlayerName,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  Section,
  HistoryTable,
  ResultBadge,
  BackButton,
  ResetButton,
  EmptyHistory,
  IconWrapper,
} from "./Profile.styles";

const ITEMS_PER_PAGE = 3;

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { playerName } = usePlayerName();
  const { profile, resetStats } = useGameStats(playerName);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(profile.history.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentGames = profile.history.slice(startIndex, endIndex);

  return (
    <ProfileContainer>
      <BackButton onClick={() => navigate("/game")}>
        <IconWrapper>
          <FaArrowLeft />
        </IconWrapper>
        Back to Game
      </BackButton>
      <Content>
        <Sidebar>
          <Avatar>
            <FaUser size={50} />
          </Avatar>
          <PlayerName>{playerName}</PlayerName>
          <StatsGrid>
            <StatCard>
              <IconWrapper>
                <FaTrophy />
              </IconWrapper>
              <StatValue>{profile.stats.totalGames}</StatValue>
              <StatLabel>Total</StatLabel>
            </StatCard>
            <StatCard>
              <IconWrapper>
                <FaChartLine />
              </IconWrapper>
              <StatValue>{profile.stats.wins}</StatValue>
              <StatLabel>Wins</StatLabel>
            </StatCard>
            <StatCard>
              <IconWrapper>
                <FaHistory />
              </IconWrapper>
              <StatValue>{profile.stats.losses}</StatValue>
              <StatLabel>Losses</StatLabel>
            </StatCard>
            <StatCard>
              <IconWrapper>
                <FaCrosshairs />
              </IconWrapper>
              <StatValue>
                {calculateAccuracy(
                  profile.stats.totalHits,
                  profile.stats.totalMisses
                )}
                %
              </StatValue>
              <StatLabel>Accuracy</StatLabel>
            </StatCard>
          </StatsGrid>
        </Sidebar>

        <MainContent>
          <Section>
            <h3>Game Statistics</h3>
            <StatsGrid>
              <StatCard>
                <IconWrapper>
                  <FaTrophy />
                </IconWrapper>
                <StatValue>{profile.stats.bestScore}</StatValue>
                <StatLabel>Best Score</StatLabel>
              </StatCard>
              <StatCard>
                <IconWrapper>
                  <FaCrosshairs />
                </IconWrapper>
                <StatValue>{Math.round(profile.stats.averageHits)}</StatValue>
                <StatLabel>Average Hits</StatLabel>
              </StatCard>
              <StatCard>
                <IconWrapper>
                  <FaShip />
                </IconWrapper>
                <StatValue>{Math.round(profile.stats.averageMisses)}</StatValue>
                <StatLabel>Average Misses</StatLabel>
              </StatCard>
              <StatCard>
                <IconWrapper>
                  <FaChartLine />
                </IconWrapper>
                <StatValue>
                  {calculateWinRate(
                    profile.stats.wins,
                    profile.stats.totalGames
                  )}
                </StatValue>
                <StatLabel>Win Rate</StatLabel>
              </StatCard>
            </StatsGrid>
          </Section>

          <Section>
            <h3>Game History</h3>
            {profile.history.length > 0 ? (
              <>
                <HistoryTable>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Result</th>
                      <th>Hits</th>
                      <th>Misses</th>
                      <th>Time</th>
                      <th>Sunk Ships</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentGames.map((game) => (
                      <tr key={game.id}>
                        <td>{formatDate(game.date)}</td>
                        <td>
                          <ResultBadge result={game.result}>
                            {game.result === "win" ? "Victory" : "Defeat"}
                          </ResultBadge>
                        </td>
                        <td>{game.hits}</td>
                        <td>{game.misses}</td>
                        <td>{formatTime(game.duration)}</td>
                        <td>{game.sunkShips.join(", ")}</td>
                      </tr>
                    ))}
                  </tbody>
                </HistoryTable>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <EmptyHistory>
                <p>No games played yet</p>
                <p>Play your first game to see your history here!</p>
              </EmptyHistory>
            )}
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <ResetButton onClick={resetStats}>
                <IconWrapper>
                  <FaTrash />
                </IconWrapper>
                Reset Statistics
              </ResetButton>
            </div>
          </Section>
        </MainContent>
      </Content>
    </ProfileContainer>
  );
};
