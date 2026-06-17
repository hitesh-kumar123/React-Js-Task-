import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: uuid(),
        ...action.payload,
      });
    },

    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
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
        (t) => t.id === taskId
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