import { useQuery } from "@tanstack/react-query";
import { getHospitalStaffs } from "../../apis/users";

export const useHospitalStaffs = (hospital_id) => {
  return useQuery({
    queryKey: ["staffs", hospital_id], // Unique query key
    queryFn: () => getHospitalStaffs(hospital_id),
  });
};
