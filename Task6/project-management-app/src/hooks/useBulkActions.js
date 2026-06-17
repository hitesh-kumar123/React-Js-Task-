import { useState } from "react";

export const useBulkActions = () => {

    const [
        selectedTasks,
        setSelectedTasks,
    ] = useState([]);

    const toggleTask = (id) => {

        setSelectedTasks(
            (prev) =>
                prev.includes(id)
                    ? prev.filter(
                        (taskId) =>
                            taskId !== id
                    )
                    : [...prev, id]
        );
    };

    const clearSelection =
        () =>
            setSelectedTasks([]);

    return {
        selectedTasks,
        toggleTask,
        clearSelection,
    };
};