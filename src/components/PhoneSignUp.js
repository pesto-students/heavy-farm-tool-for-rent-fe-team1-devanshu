import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import "react-phone-number-input/style.css";
import {
  Container,
  Button,
  Box,
  InputLeftAddon,
  Input,
  InputGroup,
  HStack,
  VStack,
  Heading,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import { useUserAuth } from "../context/UserAuthContext";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    let val = "+91" + number;
    // setNumber(prev=>val)
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(val);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    console.log("hi");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
      console.log("verify OTP");
    } catch (err) {
      setError(err.message);
    }
  };

  const [toggle, setToggle] = useState(false);
  return (
    // <section
    //   style={{
    //     display: "flex",
    //     height: "100vh",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Container
    //     centerContent
    //     py={{ base: "12", md: "24" }}
    //     px={{ base: "0", sm: "8" }}
    //   >
    //     <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
    //       Log in With Phone Number
    //     </Heading>
    //     <Box maxW="md" borderWidth="1px" borderRadius="lg">
    //       {error && <Alert variant="danger">{error}</Alert>}
    //       <Form
    //         onSubmit={getOtp}
    //         // style={{ display: !flag ? "block" : "none" }}
    //       >
    //         <Box padding={"20px"}>
    //           <InputGroup>
    //             <InputLeftAddon children="+91" />
    //             <Input
    //               type="tel"
    //               placeholder="phone number"
    //               value={number}
    //               onChange={(e) => setNumber(e.target.value)}toggle
    //             />
    //           </InputGroup>
    //           <VStack>
    //             <div id="recaptcha-container"></div>
    //           </VStack>
    //           <HStack>
    //             {toggle ? (
    //               <VStack p={"1.5"} h={"100%"} align="stretch">
    //                 <Input
    //                   placeholder="Enter OTP"
    //                   maxWidth={"40%"}
    //                   onChange={(e) => setOtp(e.target.value)}
    //                 ></Input>
    //                 <Button colorScheme="teal" size="lg" onClick={verifyOtp}>
    //                   Submit
    //                 </Button>
    //               </VStack>
    //             ) : (
    //               <Button
    //                 colorScheme="teal"
    //                 mt="10"
    //                 size="lg"
    //                 onClick={(e) => {
    //                   getOtp(e);
    //                   setToggle((prev) => !prev);
    //                 }}
    //               >
    //                 Get OTP
    //               </Button>
    //             )}
    //           </HStack>
    //         </Box>
    //       </Form>
    //     </Box>
    //   </Container>
    // </section>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Heavy Farm
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in With Phone Number
            </h1>
            <form
              style={{ display: !flag ? "block" : "none" }}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your phone number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="999999999"
                  required=""
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div id="recaptcha-container"></div>
              <div style={{ height: "50px" }}>
                {toggle ? (
                  <>
                    <input
                      placeholder="Enter OTP"
                      // maxWidth={"40%"}
                      onChange={(e) => setOtp(e.target.value)}
                    ></input>
                    <button
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      onClick={verifyOtp}
                    >
                      Submit
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={(e) => {
                      getOtp(e);
                      setToggle((prev) => !prev);
                    }}
                  >
                    Get OTP
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneSignUp;
