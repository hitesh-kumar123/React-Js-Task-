import { useDispatch, useSelector } from "react-redux";

import {
    addProject,
    updateProject,
    deleteProject,
    selectProject,
} from "../app/features/projects/projectSlice";

const useProjects = () => {
    const dispatch = useDispatch();

    const { projects, activeProject } =
        useSelector((state) => state.projects);

    return {
        projects,
        activeProject,

        createProject: (data) =>
            dispatch(addProject(data)),

        editProject: (data) =>
            dispatch(updateProject(data)),

        removeProject: (id) =>
            dispatch(deleteProject(id)),

        setProject: (id) =>
            dispatch(selectProject(id)),
    };
};

export default useProjects;