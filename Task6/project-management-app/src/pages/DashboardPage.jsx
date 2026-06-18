import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import useProjects from "../hooks/useProjects";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");

  const {
    createProject,
    selectedProject,
  } = useProjects();

  const handleAddProject = () => {
    if (!projectName.trim()) return;

    createProject({
      id: Date.now().toString(),
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
              setProjectName(e.target.value)
            }
          />

          <button onClick={handleAddProject}>
            Add Project
          </button>

          <ProjectList />
        </div>

        <div className="right-panel">
          <h2>Selected Project</h2>

          {selectedProject ? (
            <>
              <h3>{selectedProject.name}</h3>

              <button
                onClick={() =>
                  navigate("/board")
                }
              >
                Open Board
              </button>
            </>
          ) : (
            <p>Select a project first</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;