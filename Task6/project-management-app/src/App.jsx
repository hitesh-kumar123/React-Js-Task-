import { useState } from "react";
import BoardView from "./components/BoardView";
import { useBoards } from "./hooks/useBoards";
import { useProjects } from "./hooks/useProjects";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { projects, createProject, removeProject } = useProjects();
  const { createTask } = useTasks();

  const [title, setTitle] = useState("");

  const addTaskHandler = () => {
    if (!title) return;

    createTask({
      id: Date.now(),

      title,

      boardId: "todo",

      priority: "Medium",
    });

    setTitle("");
  };
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

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTaskHandler}>Add Task</button>

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
