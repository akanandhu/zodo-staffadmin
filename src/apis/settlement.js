import apiClient from "./apiClient";

export const getSettlementsByHospitalId = async (id) => {
  const response = await apiClient.get(`/settlements?hospital_id=${id}`);
  return response?.data?.data ?? [];
};

export const initiateSettlement = async (settlementData) => {
  const response = await apiClient.post("/settlements", settlementData);
  return response.data;
};