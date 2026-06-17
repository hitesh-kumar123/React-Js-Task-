import { useDispatch, useSelector } from "react-redux";

import {
    addUser,
    removeUser,
    updateUser,
} from "../app/features/users/userSlice";

const useUsers = () => {
    const dispatch = useDispatch();

    const users = useSelector(
        (state) => state.users.users
    );

    return {
        users,

        inviteUser: (user) =>
            dispatch(addUser(user)),

        deleteUser: (id) =>
            dispatch(removeUser(id)),

        editUser: (user) =>
            dispatch(updateUser(user)),
    };
};

export default useUsers;