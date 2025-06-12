import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../../apis/dashboard";

export const useDashboardData = () => {
  return useQuery({
    queryKey: ["dashboard"], // Unique query key
    queryFn: () => getDashboardData(),
  });
};
