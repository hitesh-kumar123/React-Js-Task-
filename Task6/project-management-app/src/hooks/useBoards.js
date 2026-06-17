import { useDispatch, useSelector } from "react-redux"
import { addBoard, deleteBoard } from "../redux/boardSlice";



export const useBoards = () => {
    const dispatch = useDispatch();

    const boards = useSelector(
        (state) => state.boards.boards
    );

    const createBoard = (board) => {
        dispatch(addBoard(board));
    };

    const removeBoard = (id) => {
        dispatch(deleteBoard(id));
    }

    return {
        boards,
        createBoard,
        removeBoard,
    }

}