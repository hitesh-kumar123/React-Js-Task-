import { useAuth0 } from "@auth0/auth0-react";

import { useDispatch } from "react-redux";

import { setUser, clearUser } from "../features/auth/authSlice";
import { useEffect } from "react";

const AuthSync = () => {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
    }
  }, [isAuthenticated, user, dispatch]);

  return null;
};

export default AuthSync;
