import useDragAndDrop from "../hooks/useDragAndDrop";
import useTasks from "../hooks/useTasks";
import useAuth from "../hooks/useAuth";
import useNotifications from "../hooks/useNotifications";

const TaskCard = ({ task, onEditTask }) => {
  const { handleDragStart } = useDragAndDrop();

  const { removeTask } = useTasks();

  const { role } = useAuth();

  const { showInfo } = useNotifications();

  const handleDelete = () => {
    removeTask(task.id);

    showInfo("Task Deleted Successfully");
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

      <div className="task-card-actions">
        <button className="btn-edit" onClick={() => onEditTask(task)}>
          Edit
        </button>
        {role === "Admin" && (
          <button className="btn-delete" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
