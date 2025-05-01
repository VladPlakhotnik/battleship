import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  StatusContainer,
  Stats,
  StatItem,
  SunkShips,
  ShipList,
  ShipItem,
  ShipInfo,
  ShipInfoItem,
} from "./GameStatus.styles";
import { SHIP_IMAGES } from "../../constants/images";

export const GameStatus: React.FC = () => {
  const { hits, misses, sunkShips, gameData } = useSelector(
    (state: RootState) => state.game
  );

  return (
    <StatusContainer>
      <Stats>
        <StatItem>
          <h3>Hits</h3>
          <p>{hits}</p>
        </StatItem>
        <StatItem>
          <h3>Misses</h3>
          <p>{misses}</p>
        </StatItem>
      </Stats>

      <ShipInfo>
        <h3>Ship Information</h3>
        {Object.entries(gameData.shipTypes).map(([ship, info]) => (
          <ShipInfoItem key={ship} isSunk={sunkShips.includes(ship)}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={SHIP_IMAGES[ship as keyof typeof SHIP_IMAGES]}
                alt={ship}
              />
              <span style={{ textTransform: "capitalize" }}>{ship}</span>
            </div>
            <span>
              {sunkShips.includes(ship) ? "Sunk" : `Size: ${info.size}`}
            </span>
          </ShipInfoItem>
        ))}
      </ShipInfo>

      {sunkShips.length > 0 && (
        <SunkShips>
          <h3>Sunk Ships</h3>
          <ShipList>
            {sunkShips.map((ship) => (
              <ShipItem key={ship}>
                <img
                  src={SHIP_IMAGES[ship as keyof typeof SHIP_IMAGES]}
                  alt={ship}
                />
                {ship}
              </ShipItem>
            ))}
          </ShipList>
        </SunkShips>
      )}
    </StatusContainer>
  );
};
