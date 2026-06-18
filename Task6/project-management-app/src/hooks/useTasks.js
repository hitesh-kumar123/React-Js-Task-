import { useDispatch, useSelector } from "react-redux";

import {
  addTask,
  updateTask,
  deleteTask,
} from "../redux/taskSlice";

const useTasks = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(
    (state) => state.tasks.tasks
  );

  const createTask = (task) => {
    dispatch(addTask(task));
  };

  const editTask = (id, updatedData) => {
    dispatch(
      updateTask({
        id,
        updatedData,
      })
    );
  };

  const removeTask = (id) => {
    dispatch(deleteTask(id));
  };

  const assignUser = (id, user) => {
    dispatch(
      updateTask({
        id,
        updatedData: {
          assignee: user,
        },
      })
    );
  };

  const updatePriority = (id, priority) => {
    dispatch(
      updateTask({
        id,
        updatedData: {
          priority,
        },
      })
    );
  };

  const updateDueDate = (id, dueDate) => {
    dispatch(
      updateTask({
        id,
        updatedData: {
          dueDate,
        },
      })
    );
  };

  return {
    tasks,
    createTask,
    editTask,
    removeTask,
    assignUser,
    updatePriority,
    updateDueDate,
  };
};

export default useTasks;