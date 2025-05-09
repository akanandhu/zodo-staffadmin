import { useQuery } from "@tanstack/react-query";
import {
  getSettlementsByHospitalId,
  getSettlementsByHospitalIdQuery,
} from "../../apis/settlement";

export const useSettlementList = (hospital_id, query) => {
  return useQuery({
    queryKey: ["settlements", hospital_id, query], // Unique query key
    queryFn: () =>
      query
        ? getSettlementsByHospitalIdQuery(hospital_id, query)
        : getSettlementsByHospitalId(hospital_id),
  });
};
