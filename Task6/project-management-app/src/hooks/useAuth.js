import { useDispatch, useSelector } from "react-redux";

import {
  login,
  logout,
  updateRole,
} from "../redux/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  const auth = useSelector(
    (state) => state.auth
  );

  const signIn = (user) => {
    dispatch(login(user));
  };

  const signOut = () => {
    dispatch(logout());
  };

  const changeRole = (role) => {
    dispatch(updateRole(role));
  };

  return {
    ...auth,
    signIn,
    signOut,
    changeRole,
  };
};