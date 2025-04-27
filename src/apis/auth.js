import apiClient from "./apiClient";

export const login = async (credentials) => {
    const response = await apiClient.post("/auth/login", credentials);
    console.log("Login response", response);
    
    return response.data;
  };
