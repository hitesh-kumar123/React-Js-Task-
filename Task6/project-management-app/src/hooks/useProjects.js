import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "../redux/projectSlice";


export const useProjects = () => {
    const dispatch = useDispatch();

    const projects = useSelector((state) => state.project.list);

    const createProject = (project) => {
        dispatch(addProject(project))
    }

    // delete 
    const removeProject = (id) => {
        dispatch(deleteProject(id));
        console.log(removeProject)
    };

    return {
        projects,
        createProject,
        removeProject
    }
}