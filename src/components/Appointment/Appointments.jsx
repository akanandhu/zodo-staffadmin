import React, { useState } from "react";
import TransparentTabs from "../tabs/TransparentTabs";
import AppointmentTable from "./AppointmentTable";
import { useAuth } from "../../hooks/useAuth";
import { useHospitalAppointments } from "../../hooks/appointments/useHospitalAppointments";

function Appointments() {
  // const { appointments, loading } = props;
  const { hospitalId } = useAuth();
  const { data:appointmentList, isLoading } = useHospitalAppointments(hospitalId);
  const [date, setdate] = useState(null)
  const [searchterm, setsearchterm] = useState("")
  const handleDate = (date)=>{
    setdate(date);
  }
  const handleSearch = (searchTerm)=>{
    setsearchterm(searchTerm);
  }
  const query = `name=${searchterm}&date=${date}`
  console.log("APPOINTMENT QUERY",query);
  
  const onGoing = appointmentList?.filter((item)=> item.status === "started");
  const cancelled = appointmentList?.filter((item)=> item.status === "cancelled");
  const completed = appointmentList?.filter((item)=> item.status === "completed");
  // const completed = 
  const appointmentDataTab = [
    {
      id: "allAppointments",
      title: "All",
      content: <AppointmentTable appointmentList={appointmentList} loading={isLoading} handleDate={handleDate} handleSearch={handleSearch}/>,
      link:'all',
      mainTab:'appointment'
    },
    {
      id: "ongoing",
      title: "Ongoing",
      content: <AppointmentTable appointmentList={onGoing} loading={isLoading} handleDate={handleDate} handelSearch={handleSearch}/>,
      link:'ongoing',
      mainTab:'appointment'
    },
    {
      id: "cancelled",
      title: "Cancelled",
      content: <AppointmentTable appointmentList={cancelled}  loading={isLoading} handleDate={handleDate} handleSearch={handleSearch}/>,
      link:'cancelled',
      mainTab:'appointment'
    },
    {
      id: "completed",
      title: "Completed",
      content: <AppointmentTable appointmentList={completed}  loading={isLoading} handleDate={handleDate} handleSearch={handleSearch}/>,
      link:'completed',
      mainTab:'appointment'
    },
  ];
  return (
    <div className="card-box mt-3">
      <TransparentTabs tabData={appointmentDataTab} />
    </div>
  );
}

export default Appointments;
