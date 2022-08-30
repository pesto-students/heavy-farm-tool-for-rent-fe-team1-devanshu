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
    <section
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        centerContent
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
          Log in With Phone Number
        </Heading>
        <Box maxW="md" borderWidth="1px" borderRadius="lg">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form
            onSubmit={getOtp}
            // style={{ display: !flag ? "block" : "none" }}
          >
            <Box padding={"20px"}>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  placeholder="phone number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </InputGroup>
              <VStack>
                <div id="recaptcha-container"></div>
              </VStack>
              <HStack>
                {toggle ? (
                  <VStack p={"1.5"} h={"100%"} align="stretch">
                    <Input
                      placeholder="Enter OTP"
                      maxWidth={"40%"}
                      onChange={(e) => setOtp(e.target.value)}
                    ></Input>
                    <Button colorScheme="teal" size="lg" onClick={verifyOtp}>
                      Submit
                    </Button>
                  </VStack>
                ) : (
                  <Button
                    colorScheme="teal"
                    mt="10"
                    size="lg"
                    onClick={(e) => {
                      getOtp(e);
                      setToggle((prev) => !prev);
                    }}
                  >
                    Get OTP
                  </Button>
                )}
              </HStack>
            </Box>
          </Form>
        </Box>
      </Container>
    </section>
  );
};

export default PhoneSignUp;
