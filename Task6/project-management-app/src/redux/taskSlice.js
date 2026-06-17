import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,

    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) =>
                    task.id !== action.payload
            );
        },

        moveTask: (state, action) => {
            const { taskId, boardId } =
                action.payload;

            const task = state.tasks.find(
                (task) =>
                    task.id === taskId
            );

            if (task) {
                task.boardId = boardId;
            }
        },
    }
});

export const {
    addTask,
    deleteTask,
    moveTask,
} = taskSlice.actions;

export default taskSlice.reducer;