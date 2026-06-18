import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  selectedProject: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    updateProject: (state, action) => {
      const { id, updatedData } = action.payload;

      state.projects = state.projects.map((project) =>
        project.id === id
          ? { ...project, ...updatedData }
          : project
      );
    },

    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },

    selectProject: (state, action) => {
      state.selectedProject = action.payload;
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