import { useState } from "react";

const useBulkActions = () => {
  const [selectedTasks, setSelectedTasks] =
    useState([]);

  const toggleTask = (taskId) => {
    setSelectedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter(
            (id) => id !== taskId
          )
        : [...prev, taskId]
    );
  };

  const clearSelection = () => {
    setSelectedTasks([]);
  };

  const selectAll = (tasks) => {
    setSelectedTasks(
      tasks.map((task) => task.id)
    );
  };

  return {
    selectedTasks,
    toggleTask,
    clearSelection,
    selectAll,
  };
};

export default useBulkActions;