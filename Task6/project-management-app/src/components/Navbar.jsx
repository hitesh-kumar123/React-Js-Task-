import {
  Link,
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar"
    >

      <h2>
        Project Manager
      </h2>

      <div>

        <Link to="/">
          Dashboard
        </Link>

        <Link to="/boards">
          Boards
        </Link>

        <Link to="/users">
          Users
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;