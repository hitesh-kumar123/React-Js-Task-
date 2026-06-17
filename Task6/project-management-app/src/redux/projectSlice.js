import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "projects",

    initialState: {
        list: [],
    },

    reducers: {
        addProject: (state, action) => {
            state.list.push(action.payload);
        },

        // Delete
        deleteProject: (state, action) => {
            state.list = state.list.filter(
                project => project.id !== action.payload
            );
        }



    },
})

export const { addProject, deleteProject } = projectSlice.actions;

export default projectSlice.reducer;