import apiClient from "./apiClient";

export const getHospitalAppointments = async (id) => {
  const response = await apiClient.get(`/bookings/hospital/${id}/bookings`);
  return response?.data?.data;
};