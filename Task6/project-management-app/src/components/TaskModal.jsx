import { useState } from "react";
import useTasks from "../hooks/useTasks";

const TaskModal = ({
  isOpen,
  closeModal,
}) => {
  const { createTask } = useTasks();

  const [title, setTitle] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [assignee, setAssignee] =
    useState("");

  const [dueDate, setDueDate] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      id: Date.now(),
      title,
      priority,
      assignee,
      dueDate,
      boardId: "todo",
    });

    closeModal();

    setTitle("");
    setPriority("Medium");
    setAssignee("");
    setDueDate("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Task</h2>

        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            required
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(
                e.target.value
              )
            }
          >
            <option>
              Low
            </option>
            <option>
              Medium
            </option>
            <option>
              High
            </option>
          </select>

          <input
            type="text"
            placeholder="Assignee"
            value={assignee}
            onChange={(e) =>
              setAssignee(
                e.target.value
              )
            }
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(
                e.target.value
              )
            }
          />

          <div className="modal-actions">
            <button
              type="submit"
            >
              Save
            </button>

            <button
              type="button"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;