import { useBoards } from "../hooks/useBoards";
import { useTasks } from "../hooks/useTasks";
import { useDrop } from "react-dnd";

import TaskCard from "./TaskCard";

const BoardView = () => {
  const { boards } = useBoards();

  const {
    tasks,
    removeTask,
    moveTaskToBoard,
  } = useTasks();

  return (
    <div className="board-container">
      {boards.map((board) => (
        <BoardColumn
          key={board.id}
          board={board}
          tasks={tasks.filter(
            (task) => task.boardId === board.id
          )}
          moveTaskToBoard={moveTaskToBoard}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

const BoardColumn = ({
  board,
  tasks,
  moveTaskToBoard,
  removeTask,
}) => {
  const [, drop] = useDrop(() => ({
    accept: "TASK",

    drop: (item) => {
      moveTaskToBoard(item.id, board.id);
    },
  }));

  return (
    <div
      ref={drop}
      className="board"
    >
      <h3>{board.title}</h3>

      {tasks.length === 0 ? (
        <p>No Tasks</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            removeTask={removeTask}
          />
        ))
      )}
    </div>
  );
};

export default BoardView;