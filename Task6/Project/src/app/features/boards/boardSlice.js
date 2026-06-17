import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  boards: [
    {
      id: uuid(),
      name: "To Do",
    },
    {
      id: uuid(),
      name: "In Progress",
    },
    {
      id: uuid(),
      name: "Done",
    },
  ],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,

  reducers: {
    addBoard: (state, action) => {
      state.boards.push({
        id: uuid(),
        name: action.payload,
      });
    },

    deleteBoard: (state, action) => {
      state.boards = state.boards.filter(
        (board) => board.id !== action.payload
      );
    },
  },
});

export const {
  addBoard,
  deleteBoard,
} = boardSlice.actions;

export default boardSlice.reducer;