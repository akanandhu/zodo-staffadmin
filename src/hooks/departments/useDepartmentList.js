import { useQuery } from "@tanstack/react-query";
import { getDepartmentList } from "../../apis/departments";

export const useDepartmentList = (id, searchTerm) => {
  return useQuery({
    queryKey: ["departments", id, searchTerm], // Unique query key
    queryFn: () => getDepartmentList(id, searchTerm),
  });
};
