

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { configureStore } from "./store";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
=======

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
      <App/>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
>>>>>>> 5db63f47aa4d1668540caeb70d71cba1befa98df
);
