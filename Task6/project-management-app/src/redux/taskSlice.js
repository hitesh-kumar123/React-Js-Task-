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

    updateTask: (state, action) => {
      const { id, updatedData } = action.payload;

      state.tasks = state.tasks.map((task) =>
        task.id === id
          ? { ...task, ...updatedData }
          : task
      );
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },

    moveTask: (state, action) => {
      const { taskId, boardId } =
        action.payload;

      const task = state.tasks.find(
        (task) =>
          String(task.id) ===
          String(taskId)
      );

      if (task) {
        task.boardId = boardId;
      }
    },
  },
});

export const {
  addTask,
  updateTask,
  deleteTask,
  moveTask,
} = taskSlice.actions;

export default taskSlice.reducer;