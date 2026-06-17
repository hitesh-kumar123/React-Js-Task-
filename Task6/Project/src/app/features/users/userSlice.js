import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.users.push({
        id: uuid(),
        ...action.payload,
      });
    },

    removeUser: (state, action) => {
      state.users = state.users.filter(
        (u) => u.id !== action.payload
      );
    },

    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (u) => u.id === action.payload.id
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const {
  addUser,
  removeUser,
  updateUser,
} = userSlice.actions;

export default userSlice.reducer;