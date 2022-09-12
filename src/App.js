import "./App.css";
import PhoneSignUp from "./components/PhoneSignUp";
import Layout from "./components/Layout"
import SingleProduct from "./components/SingleProduct"
import HomePage from "./components/HomePage"
import ProtectedRoute from "./components/ProtectedRoute"
import { UserAuthContextProvider } from "./context/UserAuthContext";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route exact path="/" element={<PhoneSignUp />} />

        <Route
          exact
          path="/home"
          index
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/product/:slug" index element={<SingleProduct />} />



      </Routes>
    </UserAuthContextProvider >
  );
}

export default App;
