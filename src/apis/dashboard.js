import apiClient from "./apiClient";

export const getDashboardData = async () => {
  const response = await apiClient.get(`/dashboard/counts`);
  return response?.data || {};
};

export const getAnalyticsData = async (query) => {
  const response = await apiClient.get(`/dashboard/bookings-by-month?${query}`);
  return response?.data || [];
};

export const getHospitalAnalytics = async (id) => {
  const response = await apiClient.get(`/dashboard/hospitals/${id}`);
  return response?.data || [];
};

export const getDoctorAnalytics = async (id) => {
  const response = await apiClient.get(`/dashboard/doctors/${id}`);
  return response?.data || [];
};
