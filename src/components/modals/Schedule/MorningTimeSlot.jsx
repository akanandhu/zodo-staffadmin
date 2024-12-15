import React from "react";
import Timeslot from "./Timeslot";

function MorningTimeSlot() {
  const fasttagtTimeSlots = [
    "08:30am",
    "09:00am",
    "09:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
  ];

  const normalTimeSlots = [
    "08:30am",
    "09:00am",
    "09:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
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

export default MorningTimeSlot;
