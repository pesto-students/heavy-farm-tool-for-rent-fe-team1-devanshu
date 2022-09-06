import React from "react";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "../components/HomePage";
import PhoneSignUp from "../components/PhoneSignUp";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { configureStore } from "./../store/index";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import SingleProduct from "../components/SingleProduct";
import ProtectedRoute from "../components/ProtectedRoute";
const Routes = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <UserAuthContextProvider>
        <Switch>
          <Route exact path="/" element={<PhoneSignUp />} />
          <Route path="/product/:slug" element={<SingleProduct />} />
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Switch>
      </UserAuthContextProvider>
    </Provider>
  );
};

export default Routes;
