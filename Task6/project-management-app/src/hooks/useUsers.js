import { useDispatch, useSelector } from "react-redux";

import {
  inviteUser,
  removeUser,
} from "../redux/userSlice";

const useUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector(
    (state) => state.users.users
  );

  return {
    users,

    addUser: (user) =>
      dispatch(inviteUser(user)),

    deleteUser: (id) =>
      dispatch(removeUser(id)),
  };
};

export default useUsers;