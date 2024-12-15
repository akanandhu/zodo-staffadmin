import React from "react";
import Timeslot from "./Timeslot";

function EveningTimeSlot() {
  const fasttagtTimeSlots = [
    "06:00pm",
    "06:30pm",
    "07:00pm",
    "07:30pm",
    "08:00pm",
    "08:30am",
    "09:00am",
  ];

  const normalTimeSlots = [
    "06:00pm",
    "06:30pm",
    "07:00pm",
    "07:30pm",
    "08:00pm",
    "08:30am",
    "09:00am",
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

export default EveningTimeSlot;
