import axios from "axios";
const BASE_URL = "https://api.unsplash.com";

const postRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

postRequest.interceptors.request.use((config) => {
  return config;
});

export default postRequest;
