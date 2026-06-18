import { useDispatch, useSelector } from "react-redux";

import {
  addProject,
  updateProject,
  deleteProject,
  selectProject,
} from "../redux/projectSlice";

const useProjects = () => {
  const dispatch = useDispatch();

  const { projects, selectedProject } = useSelector(
    (state) => state.projects
  );

  return {
    projects,
    selectedProject,

    createProject: (project) =>
      dispatch(addProject(project)),

    editProject: (id, updatedData) =>
      dispatch(
        updateProject({
          id,
          updatedData,
        })
      ),

    removeProject: (id) =>
      dispatch(deleteProject(id)),

    chooseProject: (project) =>
      dispatch(selectProject(project)),
  };
};

export default useProjects;