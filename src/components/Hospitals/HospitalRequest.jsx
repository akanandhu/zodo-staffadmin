import React from "react";
import { hospitalRequests } from "../configs/hospitalRequests";
import HospitalRequestCard from "./HospitalRequestCard";

function HospitalRequest() {
  return (
    <div className="row mt-2">
      {hospitalRequests.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          <HospitalRequestCard hospitalData={item} />
        </div>
      ))}
    </div>
  );
}

export default HospitalRequest;
