import { useState } from "react";

import { v4 as uuid }
from "uuid";

import {
  useBoards,
  useTasks,
} from "../hooks";

import TaskCard
from "../components/TaskCard";

const BoardView = () => {

  const { boards } =
    useBoards();

  const {
    tasks,
    createTask,
    removeTask,
  } = useTasks();

  const [title,
    setTitle] =
    useState("");

  const addTaskHandler =
    () => {

      if (!title)
        return;

      createTask({
        id: uuid(),

        title,

        boardId:
          "todo",

        priority:
          "Medium",

        dueDate:
          new Date()
            .toLocaleDateString(),
      });

      setTitle("");
    };

  return (
    <>

      <h2>
        Boards
      </h2>

      <input
        value={title}
        placeholder="Task Name"
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
      />

      <button
        onClick={
          addTaskHandler
        }
      >
        Add Task
      </button>

      <div
        className="board-container"
      >

        {boards.map(
          (board) => (

            <div
              key={board.id}
              className="board"
            >

              <h3>
                {board.title}
              </h3>

              {tasks
                .filter(
                  (task) =>
                    task.boardId ===
                    board.id
                )
                .map(
                  (task) => (

                    <TaskCard
                      key={task.id}
                      task={task}
                      removeTask={
                        removeTask
                      }
                    />

                  )
                )}

            </div>
          )
        )}

      </div>

    </>
  );
};

export default BoardView;