import React, { useState } from "react";

import { useUsers } from "../hooks";

const Settings = () => {
  const {
    users,
    inviteUser,
    deleteUser,
  } = useUsers();

  const [name, setName] =
    useState("");

  const addUser = () => {
    inviteUser({
      name,
      role: "USER",
    });

    setName("");
  };

  return (
    <div>
      <h1>
        Team Settings
      </h1>

      <input
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <button
        onClick={addUser}
      >
        Invite User
      </button>

      {users.map((user) => (
        <div key={user.id}>
          {user.name}

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
      ))}
    </div>
  );
};

export default Settings;