import { useDispatch, useSelector } from "react-redux";

import {
  addBoard,
  deleteBoard,
} from "../redux/boardSlice";

const useBoards = () => {
  const dispatch = useDispatch();

  const boards = useSelector(
    (state) => state.boards.boards
  );

  return {
    boards,

    createBoard: (board) =>
      dispatch(addBoard(board)),

    removeBoard: (id) =>
      dispatch(deleteBoard(id)),
  };
};

export default useBoards;