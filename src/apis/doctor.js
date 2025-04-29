import apiClient from "./apiClient";

export const getDoctorsListById = async (id) => {
  const response = await apiClient.get(`doctors?hospital_id=${id}`);
  return response?.data?.data ?? [];
};

export const addDoctors = async (doctorsData) => {
  const response = await apiClient.post("/doctors", doctorsData);
  return response.data;
};
