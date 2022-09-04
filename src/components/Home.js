import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Header />
      {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
      <Footer />
    </>
  );
};

export default Home;
