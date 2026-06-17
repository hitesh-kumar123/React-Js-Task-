import "react";
import { useTasks } from "../../hooks";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import TaskCard from "../Task/TaskCard";

const BoardColumn = ({ board }) => {
  const { tasks, moveTaskToBoard } =
    useTasks();

  const [, drop] = useDragAndDrop(
    {},
    (taskId) =>
      moveTaskToBoard(taskId, board.id)
  );

  const boardTasks = tasks.filter(
    (task) => task.boardId === board.id
  );

  return (
    <div
      ref={drop}
      style={{
        width: "300px",
        minHeight: "500px",
        background: "#f4f4f4",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <h3>{board.name}</h3>

      {boardTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onMove={(taskId) =>
            moveTaskToBoard(
              taskId,
              board.id
            )
          }
        />
      ))}
    </div>
  );
};

export default BoardColumn;