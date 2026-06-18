import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, role, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();

    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>Project Manager</h2>

      <div className="navbar-right">
        <span>{user?.email}</span>

        <span>{role}</span>

        <button onClick={handleLogout}>Logout</button>
        <button onClick={() => navigate("/settings")}>Settings</button>
      </div>
    </div>
  );
};

export default Navbar;
