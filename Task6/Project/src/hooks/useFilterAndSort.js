import { useMemo } from "react";

const useFilterAndSort = (
    tasks,
    filters
) => {
    const filteredTasks = useMemo(() => {
        let result = [...tasks];

        if (filters.priority) {
            result = result.filter(
                (task) =>
                    task.priority ===
                    filters.priority
            );
        }

        if (filters.assignee) {
            result = result.filter(
                (task) =>
                    task.assignee ===
                    filters.assignee
            );
        }

        if (filters.search) {
            result = result.filter((task) =>
                task.title
                    .toLowerCase()
                    .includes(
                        filters.search.toLowerCase()
                    )
            );
        }

        if (filters.sortBy === "dueDate") {
            result.sort(
                (a, b) =>
                    new Date(a.dueDate) -
                    new Date(b.dueDate)
            );
        }

        if (filters.sortBy === "priority") {
            const order = {
                High: 1,
                Medium: 2,
                Low: 3,
            };

            result.sort(
                (a, b) =>
                    order[a.priority] -
                    order[b.priority]
            );
        }

        return result;
    }, [tasks, filters]);

    return filteredTasks;
};

export default useFilterAndSort;