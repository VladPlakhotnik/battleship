import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeMove } from "../../store/gameSlice";
import { RootState } from "../../store";
import { useSound } from "../../hooks/useSound";
import { Board, Cell } from "./GameBoard.styles";

export const GameBoard: React.FC = () => {
  const dispatch = useDispatch();
  const { board, gameOver } = useSelector((state: RootState) => state.game);
  const { playHit, playMiss } = useSound();

  const handleCellClick = (row: number, col: number) => {
    if (gameOver || board[row][col].hit) return;

    dispatch(makeMove({ row, col }));

    // Проверяем результат хода
    if (board[row][col].hasShip) {
      playHit();
    } else {
      playMiss();
    }
  };

  const getCellStyle = (cell: { hit: boolean; hasShip: boolean }) => {
    if (!cell.hit) return {};

    if (cell.hasShip) {
      return {
        background: "var(--error-color)",
        "--cell-image": "url('../assets/Hit.png')",
      };
    }

    return {
      background: "var(--accent-color)",
      "--cell-image": "url('../assets/Miss.png')",
    };
  };

  return (
    <Board>
      {board.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              $hit={cell.hit}
              $hasShip={cell.hasShip}
              disabled={cell.hit || gameOver}
              style={getCellStyle(cell)}
            />
          ))}
        </React.Fragment>
      ))}
    </Board>
  );
};
