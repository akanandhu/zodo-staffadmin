import { useQuery } from "@tanstack/react-query";
import { getDoctorAppointments } from "../../apis/appointments";

export const useDoctorAppointments = (id) => {
  return useQuery({
    queryKey: ["doctorAppointments", id], // Unique query key
    queryFn: () => getDoctorAppointments(id),
  });
};