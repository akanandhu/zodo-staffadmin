import { useQuery } from "@tanstack/react-query";
import { getDoctorsListById } from "../../apis/doctor";

export const useDoctorsList = (hospital_id) => {
    return useQuery({
      queryKey: ["doctors",hospital_id], // Unique query key
      queryFn: () => getDoctorsListById(hospital_id),
    });
  };