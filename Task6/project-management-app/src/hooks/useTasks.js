import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addTask,
  updateTask,
  deleteTask,
  moveTask,
} from "../redux/taskSlice";

export const useTasks = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(
    (state) =>
      state.tasks.tasks
  );

  return {
    tasks,

    createTask: (task) =>
      dispatch(addTask(task)),

    editTask: (task) =>
      dispatch(updateTask(task)),

    removeTask: (id) =>
      dispatch(deleteTask(id)),

    moveTaskToBoard: (
      taskId,
      boardId
    ) =>
      dispatch(
        moveTask({
          taskId,
          boardId,
        })
      ),
  };
};