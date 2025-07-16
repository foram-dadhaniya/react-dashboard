import { createSlice } from "@reduxjs/toolkit";
import { ProjectInputValues } from "../../types/types";

interface projectState {
    projects: ProjectInputValues[];
}

const initialState: projectState = {
    projects: [],
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        addProject(state, action){
            state.projects.push(action.payload);
        },
        editProject(state, action){
            const index = state.projects.findIndex(state => state.id === action.payload.id);
            if(index !== -1){
                state.projects[index] = action.payload;
            }
        },
        deleteProject(state, action){
            state.projects = state.projects.filter(state => state.id !== action.payload);
        }
    }
});

export const {addProject, editProject, deleteProject} = projectSlice.actions;
export default projectSlice.reducer;