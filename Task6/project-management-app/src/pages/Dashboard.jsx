import { v4 as uuid }
from "uuid";

import {
  useProjects,
} from "../hooks";

const Dashboard = () => {

  const {
    projects,
    createProject,
    removeProject,
    setProject,
  } = useProjects();

  const addProjectHandler =
    () => {

      const name =
        prompt(
          "Project Name"
        );

      if (!name) return;

      createProject({
        id: uuid(),
        name,
      });
    };

  return (
    <div>

      <h2>Dashboard</h2>

      <button
        onClick={
          addProjectHandler
        }
      >
        Add Project
      </button>

      {projects.map(
        (project) => (

          <div
            key={project.id}
            className="project-card"
          >

            <h3>
              {project.name}
            </h3>

            <button
              onClick={() =>
                setProject(
                  project.id
                )
              }
            >
              Select
            </button>

            <button
              onClick={() =>
                removeProject(
                  project.id
                )
              }
            >
              Delete
            </button>

          </div>
        )
      )}

    </div>
  );
};

export default Dashboard;