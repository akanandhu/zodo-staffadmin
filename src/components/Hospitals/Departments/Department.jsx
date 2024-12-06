import React from "react";
import DepartmentHero from "../../heros/DepartmentHero";
import DepartmentCard from "./DepartmentCard";

function Department() {
  const depatments = [
    {
      id: 1,
      department: "Surgical Department",
      peopleCount: 8,
    },
    {
      id: 2,
      department: "Radiology Department",
      peopleCount: 8,
    },
    {
      id: 3,
      department: "Maternal & Child Health Services",
      peopleCount: 8,
    },
    {
      id: 4,
      department: "Cardiology",
      peopleCount: 8,
    },
  ];
  return (
    <div>
      <DepartmentHero />
      <div className="row mt-3">
        {depatments.map((item) => {
          return (
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xl-3"
              key={item.id + item.department}
            >
              <DepartmentCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Department;
