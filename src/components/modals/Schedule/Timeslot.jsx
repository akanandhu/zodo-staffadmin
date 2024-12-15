import React from "react";
import TimeBtn from "./TimeBtn";
import PropTypes from "prop-types";

function Timeslot(props) {
  const { timeslots } = props;
  return (
    <div className="d-flex flex-wrap">
      {timeslots.map((item) => {
        return (
          <div key={`fasttagMorningSlot${item}`}>
            <TimeBtn time={item} />
          </div>
        );
      })}
    </div>
  );
}

Timeslot.propTypes = {
  timeslots: PropTypes.node,
};

export default Timeslot;
