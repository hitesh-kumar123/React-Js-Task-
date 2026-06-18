const useFilterAndSort = (
  tasks,
  filters
) => {
  let filteredTasks = [...tasks];

  if (filters.search) {
    filteredTasks = filteredTasks.filter(
      (task) =>
        task.title
          .toLowerCase()
          .includes(
            filters.search.toLowerCase()
          )
    );
  }

  if (filters.priority) {
    filteredTasks = filteredTasks.filter(
      (task) =>
        task.priority === filters.priority
    );
  }

  if (filters.assignee) {
    filteredTasks = filteredTasks.filter(
      (task) =>
        task.assignee === filters.assignee
    );
  }

  if (filters.sortBy === "dueDate") {
    filteredTasks.sort(
      (a, b) =>
        new Date(a.dueDate) -
        new Date(b.dueDate)
    );
  }

  return filteredTasks;
};

export default useFilterAndSort;