import { useState } from "react";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import useProjects from "../hooks/useProjects";

const DashboardPage = () => {
  const [projectName, setProjectName] =
    useState("");

  const {
    createProject,
    selectedProject,
  } = useProjects();

  const handleAddProject = () => {
    if (!projectName) return;

    createProject({
      id: Date.now(),
      name: projectName,
    });

    setProjectName("");
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="left-panel">
          <h2>Projects</h2>

          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) =>
              setProjectName(
                e.target.value
              )
            }
          />

          <button
            onClick={handleAddProject}
          >
            Add Project
          </button>

          <ProjectList />
        </div>

        <div className="right-panel">
          <h2>
            Selected Project
          </h2>

          {selectedProject ? (
            <div>
              <h3>
                {
                  selectedProject.name
                }
              </h3>
            </div>
          ) : (
            <p>
              Select a project
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;