import apiClient from "./apiClient";

export const getHospitalById = async (id) => {
  const response = await apiClient.get(`/hospitals/${id}`);
  return response?.data ?? {};
};

export const editHospital = async ({ id, data }) => {
  const response = await apiClient.patch(`/hospitals/${id}`, data);
  return response.data;
};
