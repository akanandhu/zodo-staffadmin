import { useQuery } from "@tanstack/react-query";
import { getHospitalAppointments } from "../../apis/appointments";

export const useHospitalAppointments = (id) => {
  return useQuery({
    queryKey: ["appointments", id], // Unique query key
    queryFn: () => getHospitalAppointments(id),
  });
};