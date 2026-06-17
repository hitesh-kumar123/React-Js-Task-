const TaskCard = ({ task, removeTask }) => {
  return (
    <div>
      <h4>{task.title}</h4>
      <p>Priority: {task.priority}</p>

      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;