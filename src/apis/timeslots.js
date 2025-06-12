import apiClient from "./apiClient";

export const getWeeks = async () => {
  const response = await apiClient.get(`/weeks`);
  return response.data || [];
};

export const addAvailability = async (availability) => {
  const response = await apiClient.post("/availabilities", availability);
  return response.data;
};

export const editAvailability = async ({ id, data }) => {
  const response = await apiClient.patch(`/availabilities/${id}`, data);
  return response.data;
};
