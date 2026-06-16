import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useAuth0 } from "@auth0/auth0-react";

const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.password.trim()) {
      setError("All fields are required");
      return;
    }

    dispatch(
      login({
        username: formData.username,
      }),
    );

    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <button onClick={loginWithRedirect}>Login with Auth0</button>

      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) =>
          setFormData({
            ...formData,
            username: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({
            ...formData,
            password: e.target.value,
          })
        }
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
