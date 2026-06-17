import { useMemo }
from "react";

export const useFilterAndSort = (
  tasks,
  filters
) => {

  return useMemo(() => {

    let result =
      [...tasks];

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

    return result;

  }, [tasks, filters]);

};