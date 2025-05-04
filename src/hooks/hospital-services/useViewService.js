import { useQuery } from "@tanstack/react-query";
import { getServicesById } from "../../apis/hospitalServices";

export const useViewService = (service_id) => {
  return useQuery({
    queryKey: ["service",service_id], // Unique query key
    queryFn: () => getServicesById(service_id),
  });
};