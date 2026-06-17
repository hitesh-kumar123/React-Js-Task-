import { useProjects } from "../hooks/useProjects";

const Dashboard = () => {
  const {
    projects,
    createProject,
    removeProject,
  } = useProjects();

  const handleAddProject = () => {
    createProject({
      id: Date.now(),
      name: `Project ${projects.length + 1}`,
    });
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Total Projects: {projects.length}</p>

      <button onClick={handleAddProject}>
        Add Project
      </button>

      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
        >
          <h3>{project.name}</h3>

          <button
            onClick={() =>
              removeProject(project.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;