import "./App.css";
import PhoneSignUp from "./components/PhoneSignUp";
import SingleProduct from "./components/SingleProduct";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Routes, Route } from "react-router-dom";
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
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
