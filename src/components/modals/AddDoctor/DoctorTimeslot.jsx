import React from "react";
import TransparentTabs from "../../tabs/TransparentTabs";
import Timeslots from "./Timeslots/Timeslots";

function DoctorTimeslot() {
  const tabData = [
    { id: "morning", title: "Morning", content: <Timeslots /> },
    { id: "afternoon", title: "Afternoon", content: <Timeslots /> },
    {
      id: "evening",
      title: "Evening",
      content: <Timeslots />,
    },
  ];
  return (
    <div className="doctor-timeslot mt-3">
      <TransparentTabs tabData={tabData} />
    </div>
  );
}

export default DoctorTimeslot;
