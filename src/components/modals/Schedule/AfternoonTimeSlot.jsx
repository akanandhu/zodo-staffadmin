import React from "react";
import Timeslot from "./Timeslot";

function AfternoonTimeSlot() {
  const fasttagtTimeSlots = [
    "01:00pm",
    "01:30pm",
    "02:00pm",
    "02:30am",
    "03:00pm",
    "03:30pm",
    "04:00pm",
    "04:30pm",
    "05:00pm",
  ];

  const normalTimeSlots = [
    "01:00pm",
    "01:30pm",
    "02:00pm",
    "02:30am",
    "03:00pm",
    "03:30pm",
    "04:00pm",
    "04:30pm",
    "05:00pm",
  ];
  return (
    <div className="mt-3">
      <h4 className="card-title mt-2">Fast Tag</h4>
      <Timeslot timeslots={fasttagtTimeSlots} />
      <h4 className="card-title mt-3">Normal Time Slot</h4>
      <Timeslot timeslots={normalTimeSlots} />
    </div>
  );
}

export default AfternoonTimeSlot;
