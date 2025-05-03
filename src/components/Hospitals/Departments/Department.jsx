import React from "react";
// import DepartmentHero from "../../heros/DepartmentHero";
import DepartmentCard from "./DepartmentCard";
import PropTypes from "prop-types";

function Department(props) {
  const { departmentList } = props;
  return (
    <div>
      {/* <DepartmentHero /> */}
      <div className="row mt-3">
        {departmentList?.map((item) => {
          return (
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xl-3"
              key={item.id}
            >
              <DepartmentCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
// props validation
Department.propTypes = {
  departmentList: PropTypes.array,
};
export default Department;
