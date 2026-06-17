import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addTask,
  deleteTask,
  moveTask,
} from "../redux/taskSlice";

export const useTasks = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(
    (state) => state.tasks.tasks
  );

  const createTask = (task) => {
    dispatch(addTask(task));
  };

  const removeTask = (id) => {
    dispatch(deleteTask(id));
  };
  const moveTaskToBoard = (
    taskId,
    boardId
  ) => {
    dispatch(
      moveTask({
        taskId,
        boardId,
      })
    );
  };
  return {
    tasks,
    createTask,
    removeTask,
    moveTaskToBoard,
  };
};