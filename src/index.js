import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import "./sass/index.scss";
import { store, persistor }  from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
