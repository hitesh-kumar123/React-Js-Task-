import React from "react";
import TaskForm from "../Task/TaskForm";

const TaskModal = ({
  isOpen,
  closeModal,
  task,
  onSave,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "rgba(0,0,0,.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "500px",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>
          {task
            ? "Edit Task"
            : "Create Task"}
        </h2>

        <TaskForm
          task={task}
          onSubmit={onSave}
        />

        <button
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskModal;