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
        <span className="user-email">{user?.email}</span>
        <span className="user-role">{role}</span>
        <button className="btn-settings" onClick={() => navigate("/settings")}>
          Settings
        </button>
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
