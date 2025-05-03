import apiClient from "./apiClient";

export const getServicesList = async () => {
  const response = await apiClient.get(`hospital-services`);  
  return response.data?.data ?? [];
};

// export const getServicesListById = async (id) => {
//     const response = await apiClient.get(`/departments/?hospital_id=${id}`);
//     return response.data;
//   };

export const addHospitalService = async (serviceData) => {
  const response = await apiClient.post("/hospital-services", serviceData);
  return response.data || [];
};

// export const deleteDepartment = async (id) => {
//   const response = await apiClient.delete(`/departments/${id}`);
//   return response.data;
// };

// export const editDepartment = async ({id, data}) => {
//   const response = await apiClient.patch(`/departments/${id}`, data);
//   return response.data;
// };