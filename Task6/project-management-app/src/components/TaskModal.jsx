import { useState, useEffect } from "react";

import useTasks from "../hooks/useTasks";
import useNotifications from "../hooks/useNotifications";

const TaskModal = ({ isOpen, closeModal, selectedTask }) => {
  const { createTask, editTask } = useTasks();

  const [title, setTitle] = useState("");

  const [priority, setPriority] = useState("Medium");

  const [assignee, setAssignee] = useState("");

  const [dueDate, setDueDate] = useState("");
  const { showSuccess } = useNotifications();

  useEffect(() => {
    if (selectedTask) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(selectedTask.title);

      setPriority(selectedTask.priority);

      setAssignee(selectedTask.assignee);

      setDueDate(selectedTask.dueDate);
    } else {
      setTitle("");
      setPriority("Medium");
      setAssignee("");
      setDueDate("");
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTask) {
      editTask(selectedTask.id, {
        title,
        priority,
        assignee,
        dueDate,
      });
      showSuccess("Task Updated Successfully");
    } else {
      createTask({
        id: Date.now().toString(),
        title,
        priority,
        assignee,
        dueDate,
        boardId: "todo",
      });
      showSuccess("Task Created Successfully");
    }

    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{selectedTask ? "Edit Task" : "Create Task"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="text"
            placeholder="Assignee"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <div className="modal-actions">
            <button type="submit">Save</button>

            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
