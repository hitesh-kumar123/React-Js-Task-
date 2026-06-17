import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [
    {
      id: "todo",
      title: "To Do",
    },
    {
      id: "progress",
      title: "In Progress",
    },
    {
      id: "done",
      title: "Done",
    },
  ],
};

const boardSlice = createSlice({
  name: "boards",

  initialState,

  reducers: {
    addBoard: (state, action) => {
      state.boards.push(
        action.payload
      );
    },

    deleteBoard: (
      state,
      action
    ) => {
      state.boards =
        state.boards.filter(
          (board) =>
            board.id !== action.payload
        );
    },
  },
});

export const {
  addBoard,
  deleteBoard,
} = boardSlice.actions;

export default boardSlice.reducer;