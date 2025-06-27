import apiClient from "./apiClient";

export const getWeeks = async () => {
  const response = await apiClient.get(`/weeks`);
  return response.data || [];
};

export const getWeekAvailability = async (doctor_id, week_id) => {  
  const response = await apiClient.get(
    `/availabilities/doctors/${doctor_id}/week?week_id=${week_id}`
  );

  return response?.data?.data || [];
};

export const addAvailability = async (availability) => {
  const response = await apiClient.post("/availabilities", availability);
  return response.data;
};

export const editAvailability = async ({ id, data }) => {
  const response = await apiClient.patch(`/availabilities/${id}`, data);
  return response.data;
};

export const deleteAvailabilityById = async (id) => {
  const response = await apiClient.delete(`availabilities/${id}`);
  return response?.data || {};
};
