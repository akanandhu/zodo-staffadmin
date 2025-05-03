import apiClient from "./apiClient";

export const getDepartmentList = async (id, searchTerm) => {
  const response = await apiClient.get(
    `/departments/?hospital_id=${id}${searchTerm ? `&name=${searchTerm}` : ""}`
  );
  return response.data || [];
};

export const addDepartment = async (departmentData) => {
  const response = await apiClient.post("/departments", departmentData);
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
