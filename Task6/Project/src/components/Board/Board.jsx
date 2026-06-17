import React from "react";
import { useBoards } from "../../hooks";
import BoardColumn from "./BoardColumn";

const Board = () => {
  const { boards } = useBoards();

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        overflowX: "auto",
      }}
    >
      {boards.map((board) => (
        <BoardColumn key={board.id} board={board} />
      ))}
    </div>
  );
};

export default Board;
