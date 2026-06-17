import { useDispatch } from "react-redux";

import { v4 as uuid }
    from "uuid";

import {
    addNotification,
} from "../redux/notificationSlice";

export const useNotifications =
    () => {

        const dispatch =
            useDispatch();

        const success = (
            message
        ) => {

            dispatch(
                addNotification({
                    id: uuid(),
                    type: "success",
                    message,
                })
            );
        };

        const error = (
            message
        ) => {

            dispatch(
                addNotification({
                    id: uuid(),
                    type: "error",
                    message,
                })
            );
        };

        const info = (
            message
        ) => {

            dispatch(
                addNotification({
                    id: uuid(),
                    type: "info",
                    message,
                })
            );
        };

        return {
            success,
            error,
            info,
        };
    };