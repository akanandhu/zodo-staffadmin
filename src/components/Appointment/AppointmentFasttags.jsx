import { useState } from "react";
import TransparentTabs from "../tabs/TransparentTabs";
import AppointmentTable from "./AppointmentTable";
import { useHospitalAppointments } from "../../hooks/appointments/useHospitalAppointments";
import { useAuth } from "../../hooks/useAuth";
// import TransparentTabs from '../tabs/TransparentTabs'
// import { appointmentTab } from '../configs/appointmentTab'

function AppointmentFasttags() {
  const { hospitalId } = useAuth();
  const [date, setdate] = useState(null);
  const [searchterm, setsearchterm] = useState("");
  const handleDate = (date) => {
    setdate(date);
  };
  const handleSearch = (searchTerm) => {
    setsearchterm(searchTerm);
  };

  const fasttagQuery =
    (searchterm && date && `is_fast_tag=1&name=${searchterm}&date=${date}`) ||
    (searchterm && `is_fast_tag=1&name=${searchterm}`) ||
    (date && `is_fast_tag=1&date=${date}`) ||
    "is_fast_tag=1";
    
  const { data: appointmentList, isLoading } = useHospitalAppointments(
    hospitalId,
    fasttagQuery
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
          handleSearch={handleSearch}
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
          handelSearch={handleSearch}
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
          handleSearch={handleSearch}
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
