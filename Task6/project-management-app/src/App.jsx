import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BoardView from "./components/BoardView";
import UserSettings from "./components/UserSettings";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/boards"
            element={<BoardView />}
          />

          <Route
            path="/users"
            element={<UserSettings />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;