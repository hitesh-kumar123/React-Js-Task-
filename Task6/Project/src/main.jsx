import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";

import App from "./App";

import { store, persistor } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
