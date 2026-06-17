import { useState } from "react";
import { useAuth } from "../hooks";

const LoginPage = () => {
  const { signIn } = useAuth();

  const [name, setName] =
    useState("");

  const loginHandler = () => {
    if (!name) return;

    signIn({
      id: Date.now(),
      name,
      role: "Admin",
    });
  };

  return (
    <div className="login-page">

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <button
        onClick={loginHandler}
      >
        Login
      </button>

    </div>
  );
};

export default LoginPage;