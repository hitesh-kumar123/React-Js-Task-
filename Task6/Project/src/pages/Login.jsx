import React, {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
  useNotifications,
} from "../hooks";

const Login = () => {
  const navigate =
    useNavigate();

  const { signIn } =
    useAuth();

  const notification =
    useNotifications();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (
    e
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (
    e
  ) => {
    e.preventDefault();

    const mockUser = {
      id: Date.now(),
      name: "John Doe",
      email:
        formData.email,
      role: "ADMIN",
    };

    signIn(mockUser);

    notification.success(
      "Login successful"
    );

    navigate("/");
  };

  return (
    <div className="auth">
      <h1>Login</h1>

      <form
        onSubmit={
          handleSubmit
        }
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={
            formData.email
          }
          onChange={
            handleChange
          }
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={
            formData.password
          }
          onChange={
            handleChange
          }
        />

        <button
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;