import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,

  user: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;

      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.user = null;

      state.isAuthenticated = false;
    },

    updateRole: (state, action) => {
      if (state.user) {
        state.user.role = action.payload;
      }
    },
  },
});

export const {
  login,
  logout,
  updateRole,
} = authSlice.actions;

export default authSlice.reducer;