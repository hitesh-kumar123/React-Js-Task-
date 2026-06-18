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
      taskId
    );
  };

  const handleDrop = (
    event,
    boardId
  ) => {
    const taskId =
      event.dataTransfer.getData("taskId");

    dispatch(
      moveTask({
        taskId,
        boardId,
      })
    );
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return {
    handleDragStart,
    handleDrop,
    handleDragOver,
  };
};

export default useDragAndDrop;