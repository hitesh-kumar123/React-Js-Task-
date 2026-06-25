import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/authApi";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get(
        "/profile"
      );

      setUser(res.data);
    } catch (error) {
      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Profile</h2>

        {user && (
          <>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </>
        )}

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;