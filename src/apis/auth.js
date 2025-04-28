import apiClient from "./apiClient";

export const login = async (credentials) => {
  const response = await apiClient.post("/auth/login", credentials);  
  return response.data;
};

export const getUser = async () => {
  const response = await apiClient.get("/auth/me");
  return response.data;
};
