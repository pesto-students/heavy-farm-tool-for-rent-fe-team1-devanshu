import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { createRoot } from "react-dom/client";
const store = configureStore();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
