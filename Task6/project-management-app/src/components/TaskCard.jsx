import useDragAndDrop from "../hooks/useDragAndDrop";
import useTasks from "../hooks/useTasks";
import useAuth from "../hooks/useAuth";

const TaskCard = ({ task }) => {
  const { handleDragStart } = useDragAndDrop();

  const { removeTask } = useTasks();

  const { role } = useAuth();

  const handleDelete = () => {
    removeTask(task.id);
  };

  return (
    <div
      className="task-card"
      draggable
      onDragStart={(event) => handleDragStart(event, task.id)}
    >
      <h4>{task.title}</h4>

      <p>Priority: {task.priority}</p>

      <p>Assignee: {task.assignee}</p>

      <p>Due: {task.dueDate}</p>

      {role === "Admin" && <button onClick={handleDelete}>Delete Task</button>}
    </div>
  );
};

export default TaskCard;
