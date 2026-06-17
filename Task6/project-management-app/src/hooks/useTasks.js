import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addTask,
  deleteTask,
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

  return {
    tasks,
    createTask,
    removeTask,
  };
};