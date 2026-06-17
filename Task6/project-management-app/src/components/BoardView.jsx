import { useBoards } from "../hooks/useBoards";
import { useTasks } from "../hooks/useTasks";

import TaskCard from "./TaskCard";

const BoardView = () => {
  const { boards } = useBoards();

  const {
    tasks,
    removeTask,
  } = useTasks();

  return (
    <div className="board-container">
      {boards.map((board) => (
        <div
          key={board.id}
          className="board"
        >
          <h3>{board.title}</h3>

          {tasks
            .filter(
              (task) =>
                task.boardId ===
                board.id
            )
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                removeTask={
                  removeTask
                }
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default BoardView;