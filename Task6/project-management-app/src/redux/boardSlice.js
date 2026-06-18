import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [
    {
      id: "todo",
      name: "To Do",
    },
    {
      id: "inprogress",
      name: "In Progress",
    },
    {
      id: "done",
      name: "Done",
    },
  ],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },

    deleteBoard: (state, action) => {
      state.boards = state.boards.filter(
        (board) => board.id !== action.payload
      );
    },
  },
});

export const { addBoard, deleteBoard } = boardSlice.actions;

export default boardSlice.reducer;