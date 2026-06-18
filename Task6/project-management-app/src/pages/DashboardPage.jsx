import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import useProjects from "../hooks/useProjects";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");

  const { createProject, selectedProject } = useProjects();

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
            onChange={(e) => setProjectName(e.target.value)}
          />

          <button onClick={handleAddProject}>Add Project</button>

          <ProjectList />
        </div>
        <div className="right-panel">
          <h2 className="panel-title">Selected Project</h2>

          {selectedProject ? (
            <div className="project-preview">
              <h3 className="project-preview-name">{selectedProject.name}</h3>
              <button
                className="btn-open-board"
                onClick={() => navigate("/board")}
              >
                Open Board →
              </button>
            </div>
          ) : (
            <p className="panel-empty">Select a project to get started</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
