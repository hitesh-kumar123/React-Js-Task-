import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,

  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },

    clearNotification: (state, action) => {
      state.notifications =
        state.notifications.filter(
          (_, index) => index !== action.payload
        );
    },
  },
});

export const {
  addNotification,
  clearNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;