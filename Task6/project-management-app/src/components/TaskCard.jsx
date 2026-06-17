import { useDrag } from "react-dnd";

const TaskCard = ({ task, removeTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",

    item: {
      id: task.id,
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="task-card"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <h4>{task.title}</h4>

      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
