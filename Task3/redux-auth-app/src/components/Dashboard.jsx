import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <img src={user?.picture} width="100" />

      <h2>{user?.name}</h2>

      <p>{user?.email}</p>
    </div>
  );
};

export default Dashboard;
