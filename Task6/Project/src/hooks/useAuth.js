import { useDispatch, useSelector } from "react-redux";
import {
    login,
    logout,
    updateRole,
} from "../app/features/auth/authSlice";

const useAuth = () => {
    const dispatch = useDispatch();

    const { user, isAuthenticated } =
        useSelector((state) => state.auth);

    const signIn = (userData) => {
        dispatch(login(userData));
    };

    const signOut = () => {
        dispatch(logout());
    };

    const changeRole = (role) => {
        dispatch(updateRole(role));
    };

    return {
        user,
        isAuthenticated,
        signIn,
        signOut,
        changeRole,
    };
};

export default useAuth;