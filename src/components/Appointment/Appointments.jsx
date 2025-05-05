import React from "react";
import TransparentTabs from "../tabs/TransparentTabs";
import AppointmentTable from "./AppointmentTable";
import { useAuth } from "../../hooks/useAuth";
import { useHospitalAppointments } from "../../hooks/appointments/useHospitalAppointments";

function Appointments() {
  // const { appointments, loading } = props;
  const { hospitalId } = useAuth();
  const { data:appointmentList, isLoading } = useHospitalAppointments(hospitalId)
  const onGoing = appointmentList?.filter((item)=> item.status === "started");
  const cancelled = appointmentList?.filter((item)=> item.status === "cancelled");
  const completed = appointmentList?.filter((item)=> item.status === "completed");
  // const completed = 
  const appointmentDataTab = [
    {
      id: "allAppointments",
      title: "All",
      content: <AppointmentTable appointmentList={appointmentList} loading={isLoading}/>,
    },
    {
      id: "ongoing",
      title: "Ongoing",
      content: <AppointmentTable appointmentList={onGoing} loading={isLoading} />,
    },
    {
      id: "cancelled",
      title: "Cancelled",
      content: <AppointmentTable appointmentList={cancelled}  loading={isLoading}/>,
    },
    {
      id: "completed",
      title: "Completed",
      content: <AppointmentTable appointmentList={completed}  loading={isLoading} />,
    },
  ];
  return (
    <div className="card-box mt-3">
      <TransparentTabs tabData={appointmentDataTab} />
    </div>
  );
}

export default Appointments;
