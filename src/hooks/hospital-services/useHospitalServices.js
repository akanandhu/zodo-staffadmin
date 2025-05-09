import { useQuery } from "@tanstack/react-query";
import {
  getHospitalServicesList,
  getHospitalServicesListByQuery,
} from "../../apis/hospitalServices";

export const useHospitalServices = (id, query) => {
  return useQuery({
    queryKey: ["services", id], // Unique query key
    queryFn: () =>
      query
        ? getHospitalServicesListByQuery(id, query)
        : getHospitalServicesList(id),
        enabled: !!id,
  });
};
