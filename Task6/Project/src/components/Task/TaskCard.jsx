import "react";
import useDragAndDrop from "../../hooks/useDragAndDrop";

const TaskCard = ({ task, onMove }) => {
  const { drag, isDragging } =
    useDragAndDrop(task, onMove);

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        background: "#fff",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
        cursor: "grab",
        boxShadow:
          "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h4>{task.title}</h4>

      <p>{task.description}</p>

      <small>
        Priority: {task.priority}
      </small>

      <br />

      <small>
        Due: {task.dueDate}
      </small>
    </div>
  );
};

export default TaskCard;