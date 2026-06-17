import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  projects: [],
  activeProject: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,

  reducers: {
    addProject: (state, action) => {
      state.projects.push({
        id: uuid(),
        ...action.payload,
      });
    },

    updateProject: (state, action) => {
      const index = state.projects.findIndex(
        (p) => p.id === action.payload.id
      );

      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },

    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (p) => p.id !== action.payload
      );
    },

    selectProject: (state, action) => {
      state.activeProject = action.payload;
    },
  },
});

export const {
  addProject,
  updateProject,
  deleteProject,
  selectProject,
} = projectSlice.actions;

export default projectSlice.reducer;