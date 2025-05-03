import apiClient from "./apiClient";

export const addUser = async (userData) => {
  const response = await apiClient.post("/users", userData);
  return response.data || [];
};

export const getHospitalStaffs = async (hospitalId) => {
  const response = await apiClient.get(
    `/users?page=1&limit=10&user_type=staff&hospital_id=${hospitalId}`
  );
  return response?.data?.data || [];
};
