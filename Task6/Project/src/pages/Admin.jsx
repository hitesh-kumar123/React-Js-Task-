import React from "react";
import { useUsers } from "../hooks";

const Admin = () => {
  const { users } = useUsers();

  return (
    <div>
      <h1>Admin Panel</h1>

      <h3>Team Members</h3>

      {users.map((user) => (
        <div key={user.id}>
          {user.name}
          {" - "}
          {user.role}
        </div>
      ))}
    </div>
  );
};

export default Admin;
