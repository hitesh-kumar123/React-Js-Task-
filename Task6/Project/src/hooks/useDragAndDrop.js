import {
  useDrag,
  useDrop,
} from "react-dnd";

export const ItemTypes = {
  TASK: "TASK",
};

const useDragAndDrop = (
  task,
  onDrop
) => {
  const [{ isDragging }, drag] =
    useDrag({
      type: ItemTypes.TASK,

      item: {
        id: task.id,
      },

      collect: (monitor) => ({
        isDragging:
          monitor.isDragging(),
      }),
    });

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,

    drop: (item) => {
      onDrop(item.id);
    },
  });

  return {
    drag,
    drop,
    isDragging,
  };
};

export default useDragAndDrop;