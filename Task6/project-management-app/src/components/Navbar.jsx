import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, role, logoutUser } = useAuth();

  return (
    <div className="navbar">
      <h2>Project Manager</h2>

      <div className="navbar-right">
        <span>{user?.email}</span>
        <span>{role}</span>

        <button onClick={logoutUser}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;