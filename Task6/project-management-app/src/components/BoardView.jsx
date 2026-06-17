import { useBoards } from "../hooks/useBoards";

const BoardView = () => {
  const { boards } = useBoards();

  return (
    <div className="board-container">
      {boards.map((board) => (
        <div
          key={board.id}
          className="board"
        >
          <h3>{board.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default BoardView;