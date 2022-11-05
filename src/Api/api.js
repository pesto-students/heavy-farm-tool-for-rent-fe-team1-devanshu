import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3000",
  // timeout: 0
  //   baseURL: 'localhost:8091/v1/',
  timeout: 0,
});
