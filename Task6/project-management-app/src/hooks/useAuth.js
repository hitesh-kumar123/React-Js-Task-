import {
    useDispatch,
    useSelector,
} from "react-redux";

import {
    login,
    logout,
} from "../redux/authSlice";

export const useAuth =
    () => {

        const dispatch =
            useDispatch();

        const auth =
            useSelector(
                (state) =>
                    state.auth
            );

        const signIn =
            (user) => {

                dispatch(
                    login(user)
                );
            };

        const signOut =
            () => {

                dispatch(
                    logout()
                );
            };

        return {

            ...auth,

            signIn,

            signOut,

        };
    };