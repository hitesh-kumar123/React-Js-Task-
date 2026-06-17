import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import NotificationContainer from "./components/NotificationContainer";
import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BoardView from "./pages/BoardView";
import UserSettings from "./pages/UserSettings";

function App() {
  return (
    <BrowserRouter>
      <NotificationContainer />

      <Navbar />

      <div className="container">
        <Routes>
          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/boards"
            element={
              <ProtectedRoute>
                <BoardView />
              </ProtectedRoute>
            }
          />

          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UserSettings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;