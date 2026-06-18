import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const loginUser = (email, password) => {
    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      dispatch(
        login({
          user: {
            email,
          },
          role: "Admin",
        })
      );

      return true;
    }

    if (
      email === "user@gmail.com" &&
      password === "123456"
    ) {
      dispatch(
        login({
          user: {
            email,
          },
          role: "User",
        })
      );

      return true;
    }

    return false;
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    ...auth,
    loginUser,
    logoutUser,
  };
};

export default useAuth;