import AuthSync from "./components/AuthSync";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <AuthSync />

      {isAuthenticated ? (
        <>
          <Navbar />
          <Dashboard />
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>
          Login
        </button>
      )}
    </>
  );
}

export default App;