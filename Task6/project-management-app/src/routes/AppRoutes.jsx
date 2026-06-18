import {
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import BoardPage from "../pages/BoardPage";
import SettingsPage from "../pages/SettingsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage />}
      />

      <Route
        path="/dashboard"
        element={
          <DashboardPage />
        }
      />

      <Route
        path="/board"
        element={<BoardPage />}
      />

      <Route
        path="/settings"
        element={
          <SettingsPage />
        }
      />
    </Routes>
  );
};

export default AppRoutes;