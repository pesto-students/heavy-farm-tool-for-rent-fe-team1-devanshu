import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { 
  Container,
  Button,
  Box,
  Text,
  Image,
  Badge,
  InputLeftAddon,
  Input,
  InputGroup,
  HStack,
  VStack,
} from '@chakra-ui/react'
import PhoneInput from "react-phone-number-input";
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
    let val = "+91"+number;
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
    console.log("hi")
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
      console.log("verify OTP")
    } catch (err) {
      setError(err.message);
    }
  };

  const [toggle, setToggle] = useState(false)
  return(
    <Box maxW='md' borderWidth='1px' borderRadius='lg' justifyContent={"space-around"} alignItems={"center"}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={getOtp} 
      // style={{ display: !flag ? "block" : "none" }}
      >
        <Text>Login With Phone Number</Text>
        <Box padding={"10px"}>
          <InputGroup>
            <InputLeftAddon children='+91' />
            <Input type='tel' placeholder='phone number' value={number} onChange={(e)=>setNumber(e.target.value)} />
          </InputGroup>
          <VStack>
          <div id="recaptcha-container"></div>
          </VStack>
          <HStack>
          {toggle?
            <HStack justifyContent={"center"} alignItems={"center"} p={"1.5"} h={"100%"}>
              <Input placeholder="Enter OTP" maxWidth={"40%"}
                onChange={(e) => setOtp(e.target.value)}>
              </Input>
              <Button colorScheme='teal' size='md' p={"1"} onClick={verifyOtp}>
                Submit
              </Button>
            </HStack>
            :
            <Button colorScheme='teal' size='md' p={"1"} onClick={(e)=>{
              getOtp(e);
              setToggle(prev=>!prev)}}>
              GET OTP
            </Button>
        }
          </HStack>
        </Box>
      </Form>
    </Box>

  )
};

export default PhoneSignUp;
