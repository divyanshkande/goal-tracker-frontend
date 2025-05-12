import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",  // Your backend URL
  withCredentials: true,  // This is necessary to send cookies (like JWT)
});

export default api;
