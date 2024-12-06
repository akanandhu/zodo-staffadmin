import React from "react";
import { right_chevron } from "../../imagepath";
import PropTypes from "prop-types";

function DepartmentCard(props) {
  const { data } = props;
  return (
    <div className="dash-widget h-75">
      <div className="dash-content dash-count flex-grow-1 department-card">
        <h6>{data.department}</h6>
        <div className="row">
          <p className="text-dark col">{data.peopleCount} Person</p>
          <div className="col-auto">
            <img src={right_chevron} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
}
DepartmentCard.propTypes = {
  data: PropTypes.node,
};

export default DepartmentCard;
