import { v4 as uuid }
from "uuid";

import {
  useUsers,
} from "../hooks";

const UserSettings = () => {

  const {
    users,
    inviteUser,
    deleteUser,
  } = useUsers();

  const addUserHandler =
    () => {

      const name =
        prompt(
          "User Name"
        );

      if (!name)
        return;

      inviteUser({
        id: uuid(),
        name,
        role: "User",
      });
    };

  return (
    <div>

      <h2>
        Team Members
      </h2>

      <button
        onClick={
          addUserHandler
        }
      >
        Invite User
      </button>

      {users.map(
        (user) => (

          <div
            key={user.id}
          >

            <p>
              {user.name}
              {" "}
              (
              {user.role}
              )
            </p>

            <button
              onClick={() =>
                deleteUser(
                  user.id
                )
              }
            >
              Remove
            </button>

          </div>
        )
      )}

    </div>
  );
};

export default UserSettings;