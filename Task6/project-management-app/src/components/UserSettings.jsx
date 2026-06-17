import { useUsers } from "../hooks/useUsers";

const UserSettings = () => {
  const { users } = useUsers();

  return (
    <div>
      <h2>Team Members</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default UserSettings;
