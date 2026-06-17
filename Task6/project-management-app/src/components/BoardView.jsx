import { useState } from "react";
import { useBoards } from "../hooks/useBoards";
import { useTasks } from "../hooks/useTasks";

import TaskCard from "./TaskCard";

const BoardView = () => {
  const { boards } = useBoards();

  const {
    tasks,
    createTask,
    removeTask,
  } = useTasks();

  const [title, setTitle] =
    useState("");

  const addTaskHandler = () => {
    if (!title.trim()) return;

    createTask({
      id: Date.now(),
      title,
      boardId: "todo",
      priority: "Medium",
    });

    setTitle("");
  };

  return (
    <>
      <h2>Boards</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <button onClick={addTaskHandler}>
        Add Task
      </button>

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
                  task.boardId === board.id
              )
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  removeTask={removeTask}
                />
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default BoardView;