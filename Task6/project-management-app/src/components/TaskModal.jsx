const TaskModal = ({
  isOpen,
  close,
}) => {

  if (!isOpen) return null;

  return (
    <div className="modal">

      <div className="modal-content">

        <h2>Create Task</h2>

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