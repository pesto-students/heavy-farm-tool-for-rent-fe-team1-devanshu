import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PhoneSignUp from "./components/PhoneSignUp";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Layout from "./components/Layout";
function App() {
  return (
    <Layout>
      <UserAuthContextProvider>
        <Routes>
          {/* <Route path="/" element={<ProtectedRoute></ProtectedRoute>} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<PhoneSignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </Layout>
  );
}

export default App;
