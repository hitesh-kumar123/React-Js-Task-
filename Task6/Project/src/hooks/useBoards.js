import { useDispatch, useSelector } from "react-redux";

import {
    addBoard,
    deleteBoard,
} from "../app/features/boards/boardSlice";

const useBoards = () => {
    const dispatch = useDispatch();

    const boards = useSelector(
        (state) => state.boards.boards
    );

    return {
        boards,

        createBoard: (name) =>
            dispatch(addBoard(name)),

        removeBoard: (id) =>
            dispatch(deleteBoard(id)),
    };
};

export default useBoards;