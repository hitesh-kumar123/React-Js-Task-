import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import NotificationContainer from "./components/NotificationContainer";

function App() {
  return (
    <>
      <AppRoutes />
      <NotificationContainer />
    </>
  );
}

export default App;
