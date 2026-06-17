import BoardView from "./components/BoardView";
import { useBoards } from "./hooks/useBoards";
import { useProjects } from "./hooks/useProjects";

function App() {
  const { projects, createProject, removeProject } = useProjects();

  const handleAddProject = () => {
    createProject({
      id: Date.now(),
      name: "My First Project",
    });
  };
  const { boards } = useBoards();

  return (
    <>
      <h1>Project Management App</h1>

      <BoardView />

      <h2>Projects</h2>
      <button onClick={handleAddProject}>Add Project</button>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <button onClick={() => removeProject(project.id)}>Delete</button>
        </div>
      ))}
      <hr />
      <h2>Board</h2>
      {boards.map((board) => (
        <h4 key={board.id}>{board.title}</h4>
      ))}
    </>
  );
}

export default App;
