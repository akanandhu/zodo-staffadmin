import React from "react";
// import { right_chevron } from "../../imagepath";
import PropTypes from "prop-types";

function DepartmentCard(props) {
  const { data } = props;
  return (
    <div className="dash-widget">
      <div className="dash-content dash-count flex-grow-1 department-card">
        <h6>{data?.name}</h6>
        <div className="row">
          <p className="text-dark col">{data.peopleCount} Person</p>
          {data?.status === "active" ? (
            <p className="col-auto text-success">
              {/* <img src={right_chevron} alt="#" /> */}
              Active
            </p>
          ) : (
            <p className="col-auto text-danger">Inactive</p>
          )}
        </div>
      </div>
    </div>
  );
}
DepartmentCard.propTypes = {
  data: PropTypes.node,
};

export default DepartmentCard;
