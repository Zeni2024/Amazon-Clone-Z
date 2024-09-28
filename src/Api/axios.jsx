import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://127.0.0.1:5001/clone-856f9/us-central1/api",
// });
const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://amazon-api-deploy-1-fdwb.onrender.com/",
});

export {axiosInstance}

