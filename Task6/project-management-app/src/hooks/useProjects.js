import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addProject,
  updateProject,
  deleteProject,
  selectProject,
} from "../redux/projectSlice";

export const useProjects = () => {
  const dispatch = useDispatch();

  const projects = useSelector(
    (state) =>
      state.projects.projects
  );

  const selectedProject =
    useSelector(
      (state) =>
        state.projects.selectedProject
    );

  return {
    projects,
    selectedProject,

    createProject: (project) =>
      dispatch(addProject(project)),

    editProject: (project) =>
      dispatch(updateProject(project)),

    removeProject: (id) =>
      dispatch(deleteProject(id)),

    setProject: (id) =>
      dispatch(selectProject(id)),
  };
};