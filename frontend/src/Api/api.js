import axios from "axios";
export default axios.create({
  // BaseURL : 'http://localhost:8000/',
  // baseURL: "https://stage.mosaic.corp.adobe.com/", //Statge
  // baseURL: "http://localhost:8091/v1/",         //Prod
  baseURL: "http://localhost:3000",
  // timeout: 0
  //   baseURL: 'localhost:8091/v1/',
  timeout: 0,
});
