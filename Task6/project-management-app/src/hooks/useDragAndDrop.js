import {
  useDrag,
  useDrop,
} from "react-dnd";

export const useDragAndDrop = (
  task,
  onDrop
) => {

  const [{ isDragging }, drag] =
    useDrag(() => ({
      type: "TASK",

      item: task,

      collect: (
        monitor
      ) => ({
        isDragging:
          monitor.isDragging(),
      }),
    }));

  const [, drop] =
    useDrop(() => ({
      accept: "TASK",

      drop: (item) =>
        onDrop(item),
    }));

  return {
    drag,
    drop,
    isDragging,
  };
};