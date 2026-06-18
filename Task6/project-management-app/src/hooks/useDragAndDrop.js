import { useDispatch } from "react-redux";
import { moveTask } from "../redux/taskSlice";

const useDragAndDrop = () => {
  const dispatch = useDispatch();

  const handleDragStart = (
    event,
    taskId
  ) => {
    event.dataTransfer.setData(
      "taskId",
      String(taskId)
    );
  };

  const handleDrop = (
    event,
    boardId
  ) => {
    event.preventDefault();

    const taskId =
      event.dataTransfer.getData("taskId");

    dispatch(
      moveTask({
        taskId,
        boardId,
      })
    );
  };

  const handleDragOver = (
    event
  ) => {
    event.preventDefault();
  };

  return {
    handleDragStart,
    handleDrop,
    handleDragOver,
  };
};

export default useDragAndDrop;