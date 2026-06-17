import { useState } from "react";

export const useUndo = (
  initialState
) => {

  const [history, setHistory] =
    useState([initialState]);

  const [index, setIndex] =
    useState(0);

  const set = (value) => {

    const updated = [
      ...history.slice(
        0,
        index + 1
      ),
      value,
    ];

    setHistory(updated);

    setIndex(
      updated.length - 1
    );
  };

  const undo = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return {
    state: history[index],
    set,
    undo,
  };
};