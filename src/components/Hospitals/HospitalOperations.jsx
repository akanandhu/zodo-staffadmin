import React from "react";
import HospitalsList from "./HospitalsList";
import HospitalRequest from "./HospitalRequest";

function HospitalOperations() {
  const tabData = [
    {
      id: "allhospital",
      title: "All Hospital",
      content: <HospitalsList/>,
    },
    { id: "finance", title: "Request Hospitals", content: <HospitalRequest/> },
    { id: "reviews", title: "Reviews", content: <div>contnt3</div> },
  ];
  return (
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
  );
}

export default HospitalOperations;
