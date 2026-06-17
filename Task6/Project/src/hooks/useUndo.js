import { useRef } from "react";

const useUndo = () => {
  const history = useRef([]);

  const saveState = (state) => {
    history.current.push(
      JSON.parse(JSON.stringify(state))
    );
  };

  const undo = () => {
    if (
      history.current.length === 0
    )
      return null;

    return history.current.pop();
  };

  return {
    saveState,
    undo,
  };
};

export default useUndo;