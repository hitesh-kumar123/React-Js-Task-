import Board from "../components/Board";
import TaskModal from "../components/TaskModal";

import useBoards from "../hooks/useBoards";
import useTasks from "../hooks/useTasks";
import useModal from "../hooks/useModal";

const BoardPage = () => {
  const { boards } = useBoards();

  const { tasks } = useTasks();

  const {
    isOpen,
    openModal,
    closeModal,
  } = useModal();

  return (
    <div className="board-page">
      <div className="board-header">
        <h2>Board View</h2>

        <button
          onClick={openModal}
        >
          Add Task
        </button>
      </div>

      <div className="boards-container">
        {boards.map((board) => {
          const boardTasks =
            tasks.filter(
              (task) =>
                task.boardId ===
                board.id
            );

          return (
            <Board
              key={board.id}
              board={board}
              tasks={boardTasks}
            />
          );
        })}
      </div>

      <TaskModal
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default BoardPage;