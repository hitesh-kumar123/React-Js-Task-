import { useState } from "react";

import Board from "../components/Board";
import TaskModal from "../components/TaskModal";

import useBoards from "../hooks/useBoards";
import useTasks from "../hooks/useTasks";
import useModal from "../hooks/useModal";
import useFilterAndSort from "../hooks/useFilterAndSort";

const BoardPage = () => {
  const { boards } = useBoards();
  const { tasks } = useTasks();

  const { isOpen, openModal, closeModal } = useModal();

  const [selectedTask, setSelectedTask] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    priority: "",
    assignee: "",
    sortBy: "",
  });

  const filteredTasks = useFilterAndSort(tasks, filters);

  const handleAddTask = () => {
    setSelectedTask(null);
    openModal();
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    openModal();
  };

  return (
    <div className="board-page">
      <div className="board-header">
        <h2>Board View</h2>

        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search Task"
          value={filters.search}
          onChange={(e) =>
            setFilters({
              ...filters,
              search: e.target.value,
            })
          }
        />

        <select
          value={filters.priority}
          onChange={(e) =>
            setFilters({
              ...filters,
              priority: e.target.value,
            })
          }
        >
          <option value="">All Priorities</option>

          <option value="Low">Low</option>

          <option value="Medium">Medium</option>

          <option value="High">High</option>
        </select>

        <input
          type="text"
          placeholder="Assignee"
          value={filters.assignee}
          onChange={(e) =>
            setFilters({
              ...filters,
              assignee: e.target.value,
            })
          }
        />

        <select
          value={filters.sortBy}
          onChange={(e) =>
            setFilters({
              ...filters,
              sortBy: e.target.value,
            })
          }
        >
          <option value="">No Sorting</option>

          <option value="dueDate">Due Date</option>
        </select>
      </div>

      <div className="boards-container">
        {boards.map((board) => {
          const boardTasks = filteredTasks.filter(
            (task) => task.boardId === board.id,
          );

          return (
            <Board
              key={board.id}
              board={board}
              tasks={boardTasks}
              onEditTask={handleEditTask}
            />
          );
        })}
      </div>

      <TaskModal
        isOpen={isOpen}
        closeModal={closeModal}
        selectedTask={selectedTask}
      />
    </div>
  );
};

export default BoardPage;
