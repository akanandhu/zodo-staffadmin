import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASEURL, // Use the base URL from config
  headers: {
    "Content-Type": "application/json",
  }
  // withCredentials: true, // Include credentials in requests
});

// Add a request interceptor to include the token in headers
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// },
// (error) => {
//   return Promise.reject(error);
// }

// );

export default apiClient;
