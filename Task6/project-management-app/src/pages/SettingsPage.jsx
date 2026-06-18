import { useState } from "react";
import useUsers from "../hooks/useUsers";

const SettingsPage = () => {
  const [name, setName] = useState("");

  const { users, addUser, deleteUser } = useUsers();

  const handleAddUser = () => {
    if (!name) return;

    addUser({
      id: Date.now(),
      name,
    });

    setName("");
  };

  return (
    <div className="settings-page">
      <h2>Team Members</h2>

      <input
        type="text"
        placeholder="User Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAddUser}>Invite User</button>

      {users.map((user) => (
        <div key={user.id} className="user-row">
          <span>{user.name}</span>

          <button onClick={() => deleteUser(user.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SettingsPage;
