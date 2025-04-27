import { useQuery } from "@tanstack/react-query";
import { getServicesList } from "../apis/hospitalServices";

export const useServicesList = () => {
  return useQuery({
    queryKey: ["departments"], // Unique query key
    queryFn: () => getServicesList(),
  });
};