import useProjects from "../hooks/useProjects";
import useAuth from "../hooks/useAuth";

const ProjectList = () => {
  const { projects, chooseProject, removeProject } = useProjects();

  const { role } = useAuth();

  return (
    <div className="project-list">
      <h3>Projects</h3>

      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <span onClick={() => chooseProject(project)}>{project.name}</span>

          {role === "Admin" && (
            <button onClick={() => removeProject(project.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
