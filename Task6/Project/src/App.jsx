import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import BoardView from "./pages/BoardView";
import Settings from "./pages/Settings";

import NotificationContainer from "./components/Notifications/NotificationContainer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";

import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <NotificationContainer />

      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Link to="/">Dashboard</Link>

        <Link to="/board">Board</Link>

        <Link to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/board"
          element={
            <ProtectedRoute>
              <BoardView />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
