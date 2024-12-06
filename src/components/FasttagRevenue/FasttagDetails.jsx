import React from "react";
import { Link } from "react-router-dom";
import HospitalList from "./HospitalList";
import RequestedHospitals from "./RequestedHospitals";
// fasttag
function FasttagDetails() {
  const tabData = [
    {
      id: "all-hospitals",
      title: "All Hospitals",
      content: <HospitalList/>,
      
    },
    {
      id: "requested-hospitals",
      title: "Requested Hospitals",
      content: <RequestedHospitals/>,
    },
  ];
  return (
    <div className="card-box profile-header">
      <div className="profile-tabs">
        <ul className="nav nav-tabs nav-tabs-bottom">
          {tabData.map((tabItem, i) => (
            <li key={tabItem.id + i}>
              <Link
                className={`nav-link ${i == 0 ? "active" : ""}`}
                to={`#${tabItem.id}`}
                data-bs-toggle="tab"
              >
                {tabItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {tabData.map((tabItem, i) => (
          <div
            className={`tab-pane ${i == 0 ? "show active" : ""}`}
            id={tabItem.id}
            key={tabItem.id + i}
          >
            {tabItem.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FasttagDetails;
