import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  addUser,
  removeUser,
  updateUserRole,
} from "../redux/userSlice";

export const useUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector(
    (state) =>
      state.users.users
  );

  return {
    users,

    inviteUser: (user) =>
      dispatch(addUser(user)),

    deleteUser: (id) =>
      dispatch(removeUser(id)),

    changeRole: (
      id,
      role
    ) =>
      dispatch(
        updateUserRole({
          id,
          role,
        })
      ),
  };
};