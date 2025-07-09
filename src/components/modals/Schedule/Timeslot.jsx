import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { formatTime } from "../../configs/formatTime";

function Timeslot({ slots, handelTimeslot }) {
  
  return (
    <div className="mt-3">
      <div className="d-flex flex-wrap">
        {slots?.map((item) => (
          <div key={`fasttagMorningSlot${item.startTime}`}>
            <Button
              className="time-btn"
              onClick={() => handelTimeslot(item.startTime)}
            >
              {formatTime(item.startTime)} - {formatTime(item.endTime)}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

// props validation
Timeslot.propTypes = {
  slots: PropTypes.isRequired,
  handelTimeslot: PropTypes.func.isRequired,
};

export default Timeslot;
