// import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PhoneSignUp from "./components/PhoneSignUp";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Layout from "./components/Layout";
import Routes from "./Routes/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <Layout>
    //   <UserAuthContextProvider>
    //     <Routes>
    //       {/* <Route path="/" element={<ProtectedRoute></ProtectedRoute>} /> */}
    //       <Route
    //         path="/home"
    //         element={
    //           <ProtectedRoute>
    //             <HomePage />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route path="/" element={<PhoneSignUp />} />
    //     </Routes>
    //   </UserAuthContextProvider>
    // </Layout>
    <Routes />
  );
}

export default App;
