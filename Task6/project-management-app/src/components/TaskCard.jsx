import useDragAndDrop from "../hooks/useDragAndDrop";

const TaskCard = ({ task }) => {
  const { handleDragStart } =
    useDragAndDrop();

  return (
    <div
      className="task-card"
      draggable
      onDragStart={(event) =>
        handleDragStart(event, task.id)
      }
    >
      <h4>{task.title}</h4>

      <p>
        Priority:
        {task.priority}
      </p>

      <p>
        Assignee:
        {task.assignee}
      </p>

      <p>
        Due:
        {task.dueDate}
      </p>
    </div>
  );
};

export default TaskCard;