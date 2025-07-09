import PropTypes from "prop-types";
import React from "react";

function StatusBadge(props) {
  const { status } = props;
  return (
    <div
      className={`custom-badge ${
        (status === "active" && "status-green") ||
        (status === "approved" && "status-green") ||
        
        (status === "disabled" && "status-grey") ||
        (status === "unavailable" && "status-grey") ||
        (status === "blocked" && "status-grey") ||
        (status === "inactive" && "status-grey") ||
        (status === "rejected" && "status-red") ||
        (status === "pending" && "status-orange") ||
        (status === "requested" && "status-orange")
      }`}
    >
      {status}
    </div>
  );
}
// props validation
StatusBadge.propTypes = {
  status: PropTypes.string,
};
export default StatusBadge;
