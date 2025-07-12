import PropTypes from "prop-types";
import React from "react";
import { formatTime } from "../../configs/formatTime";
import { Button } from "react-bootstrap";

function ServiceScheduleForm({ handleTime }) {
  const timeSlots = [
    { startTime: "08:00:00", endTime: "12:00:00" },
    { startTime: "14:00:00", endTime: "18:00:00" },
  ];
  return (
    <div>
      <h4 className="card-title mt-2">Available Time Slots</h4>
      <div>
        <div className="d-flex flex-wrap">
          {timeSlots?.map((item) => (   
            <div key={`timeslot${item.startTime}`}>
              <Button
                className="time-btn"
                onClick={() => handleTime(item.startTime)}
              >
                {formatTime(item.startTime)} - {formatTime(item.endTime)}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ServiceScheduleForm.propTypes = {
  handleTime: PropTypes.func,
};

export default ServiceScheduleForm;
