import React from "react";

import Board from "../components/Board/Board";

const BoardView = () => {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>
        Project Board
      </h1>

      <Board />
    </div>
  );
};

export default BoardView;
