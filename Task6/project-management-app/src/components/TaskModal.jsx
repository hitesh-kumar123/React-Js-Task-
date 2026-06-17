import { useState } from "react";

const TaskModal = ({
  isOpen,
  close,
  onSubmit,
}) => {

  const [title, setTitle] =
    useState("");

  const [priority,
    setPriority] =
    useState("Medium");

  if (!isOpen)
    return null;

  return (
    <div className="modal">

      <div className="modal-content">

        <h2>
          Task
        </h2>

        <input
          value={title}
          placeholder="Title"
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
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

        <button
          onClick={() =>
            onSubmit({
              title,
              priority,
            })
          }
        >
          Save
        </button>

        <button
          onClick={close}
        >
          Close
        </button>

      </div>

    </div>
  );
};

export default TaskModal;