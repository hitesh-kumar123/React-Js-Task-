import { useMemo } from "react";

export const useFilterAndSort = (
  tasks,
  filters
) => {

  return useMemo(() => {

    let result = [...tasks];

    if (
      filters.priority
    ) {

      result =
        result.filter(
          (task) =>
            task.priority ===
            filters.priority
        );
    }

    if (
      filters.assignee
    ) {

      result =
        result.filter(
          (task) =>
            task.assignee ===
            filters.assignee
        );
    }

    if (
      filters.search
    ) {

      result =
        result.filter(
          (task) =>
            task.title
              .toLowerCase()
              .includes(
                filters.search
                  .toLowerCase()
              )
        );
    }

    if (
      filters.sortBy ===
      "dueDate"
    ) {

      result.sort(
        (a, b) =>
          new Date(a.dueDate) -
          new Date(b.dueDate)
      );
    }

    return result;

  }, [tasks, filters]);
};