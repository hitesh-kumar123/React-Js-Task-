import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {
    addUser: (state, action) => {
      state.users.push(
        action.payload
      );
    },

    removeUser: (
      state,
      action
    ) => {
      state.users =
        state.users.filter(
          (user) =>
            user.id !== action.payload
        );
    },

    updateUserRole: (
      state,
      action
    ) => {
      const user =
        state.users.find(
          (user) =>
            user.id ===
            action.payload.id
        );

      if (user) {
        user.role =
          action.payload.role;
      }
    },
  },
});

export const {
  addUser,
  removeUser,
  updateUserRole,
} = userSlice.actions;

export default userSlice.reducer;