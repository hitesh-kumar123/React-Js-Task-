import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <nav>
      <button onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;