import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth, useNotifications } from "../hooks";

const Register = () => {
  const navigate = useNavigate();

  const { signIn } = useAuth();

  const notification = useNotifications();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: "USER",
    };

    signIn(user);

    notification.success("Registration successful");

    navigate("/");
  };

  return (
    <div className="auth">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
