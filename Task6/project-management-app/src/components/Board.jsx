import TaskCard from "./TaskCard";
import useDragAndDrop from "../hooks/useDragAndDrop";

const Board = ({ board, tasks, onEditTask }) => {
  const { handleDrop, handleDragOver } = useDragAndDrop();

  return (
    <div
      className="board"
      onDrop={(event) => handleDrop(event, board.id)}
      onDragOver={handleDragOver}
    >
      <h3>{board.name}</h3>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onEditTask={onEditTask} />
      ))}
    </div>
  );
};

export default Board;
