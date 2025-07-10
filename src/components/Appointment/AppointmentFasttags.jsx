import { useState } from "react";
import TransparentTabs from "../tabs/TransparentTabs";
import AppointmentTable from "./AppointmentTable";
import { useHospitalAppointments } from "../../hooks/appointments/useHospitalAppointments";
import { useAuth } from "../../hooks/useAuth";
import { generateDateQuery } from "../configs/generateDateQuery";

function AppointmentFasttags() {
  const { hospitalId } = useAuth();
  const [dateQuery, setDatequery] = useState("");

  const handleDate = (date) => {
    const query = generateDateQuery(date);
    setDatequery(query);
  };
  const query = dateQuery ? `is_fast_tag=0&${dateQuery}` : "is_fast_tag=1" 
  const { data: appointmentList, isLoading } = useHospitalAppointments(
    hospitalId,
    query
  );

  const onGoing = appointmentList?.filter((item) => item.status === "started");
  const completed = appointmentList?.filter(
    (item) => item.status === "completed"
  );
  const appointmentRequestTab = [
    {
      id: "allFasttagAppointments",
      title: "All",
      content: (
        <AppointmentTable
          appointmentList={appointmentList}
          loading={isLoading}
          handleDate={handleDate}
        />
      ),
      link: "all",
      mainTab: "fasttag",
    },
    {
      id: "ongoingFasttags",
      title: "Ongoing",
      content: (
        <AppointmentTable
          appointmentList={onGoing}
          loading={isLoading}
          handleDate={handleDate}
        />
      ),
      link: "ongoing",
      mainTab: "fasttag",
    },
    {
      id: "completedFasttags",
      title: "Completed",
      content: (
        <AppointmentTable
          appointmentList={completed}
          loading={isLoading}
          handleDate={handleDate}
        />
      ),
      link: "completed",
      mainTab: "fasttag",
    },
  ];
  return (
    <div className="card-box mt-3">
      <TransparentTabs tabData={appointmentRequestTab} />
    </div>
  );
}

export default AppointmentFasttags;
