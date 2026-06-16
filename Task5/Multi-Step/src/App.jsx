// App.jsx - Root component, wraps everything with Redux Provider

import { Provider } from "react-redux";
import store from "./app/store";
import OnboardingPage from "./pages/OnboardingPage";
import "./App.css";

function App() {
  return (
    // Provider makes the Redux store available to ALL child components
    <Provider store={store}>
      <OnboardingPage />
    </Provider>
  );
}

export default App;