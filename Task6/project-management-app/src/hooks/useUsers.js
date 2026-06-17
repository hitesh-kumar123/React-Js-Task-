import {
    useDispatch,
    useSelector,
} from "react-redux";

import {
    addUser,
    removeUser,
} from "../redux/userSlice";

export const useUsers =
    () => {

        const dispatch =
            useDispatch();

        const users =
            useSelector(
                (state) =>
                    state.users.users
            );

        const inviteUser =
            (user) => {

                dispatch(
                    addUser(user)
                );
            };

        const deleteUser =
            (id) => {

                dispatch(
                    removeUser(id)
                );
            };

        return {

            users,

            inviteUser,

            deleteUser,

        };
    };