import { useQuery } from "@tanstack/react-query";
import { getSettlementsByHospitalId } from "../../apis/settlement";

export const useSettlementList = (hospital_id) => {
  return useQuery({
    queryKey: ["settlements", hospital_id], // Unique query key
    queryFn: () => getSettlementsByHospitalId(hospital_id),
  });
};
