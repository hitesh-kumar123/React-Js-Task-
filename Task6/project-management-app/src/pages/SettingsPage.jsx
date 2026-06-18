import { useState } from "react";

import useUsers from "../hooks/useUsers";
import useAuth from "../hooks/useAuth";

const SettingsPage = () => {
  const [name, setName] = useState("");

  const { users, addUser, deleteUser } = useUsers();

  const { role } = useAuth();

  const handleAddUser = () => {
    if (!name.trim()) return;

    addUser({
      id: Date.now().toString(),
      name,
    });

    setName("");
  };

  return (
    <div className="settings-page">
      <h2>Team Members</h2>

      {role === "Admin" && (
        <>
          <input
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={handleAddUser}>Invite User</button>
        </>
      )}

      {users.map((user) => (
        <div key={user.id} className="user-row">
          <span>{user.name}</span>

          {role === "Admin" && (
            <button onClick={() => deleteUser(user.id)}>Remove</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SettingsPage;
