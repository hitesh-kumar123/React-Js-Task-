import { useDispatch, useSelector } from "react-redux";

import {
    addTask,
    updateTask,
    deleteTask,
    moveTask,
} from "../app/features/tasks/taskSlice";

const useTasks = () => {
    const dispatch = useDispatch();

    const tasks = useSelector(
        (state) => state.tasks.tasks
    );

    return {
        tasks,

        createTask: (data) =>
            dispatch(addTask(data)),

        editTask: (data) =>
            dispatch(updateTask(data)),

        removeTask: (id) =>
            dispatch(deleteTask(id)),

        moveTaskToBoard: (taskId, boardId) =>
            dispatch(moveTask({ taskId, boardId })),
    };
};

export default useTasks;