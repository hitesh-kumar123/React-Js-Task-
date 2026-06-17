import {
  useDragAndDrop,
} from "../hooks";

const TaskCard = ({
  task,
  removeTask,
}) => {

  const {
    drag,
    isDragging,
  } =
    useDragAndDrop(
      task,
      () => {}
    );

  return (
    <div
      ref={drag}
      className="task-card"
      style={{
        opacity:
          isDragging
            ? 0.5
            : 1,
      }}
    >

      <h4>
        {task.title}
      </h4>

      <p>
        Priority:
        {" "}
        {task.priority}
      </p>

      <p>
        Due:
        {" "}
        {task.dueDate}
      </p>

      <button
        onClick={() =>
          removeTask(
            task.id
          )
        }
      >
        Delete
      </button>

    </div>
  );
};

export default TaskCard;