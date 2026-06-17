import { useState } from "react";

import { useAuth, useProjects } from "../hooks";

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const { projects, createProject } = useProjects();

  const [name, setName] = useState("");

  const addProjectHandler = () => {
    createProject({
      name,
      owner: user?.name,
    });

    setName("");
  };

  const logoutHandler = () => {
    signOut();
  };

  return (
    <div>
      <h1>Welcome {user?.name}</h1>

      <h2>Projects</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={addProjectHandler}>Create Project</button>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>

      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Dashboard;
