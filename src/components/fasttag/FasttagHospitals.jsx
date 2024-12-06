import React, { useState } from "react";
import { hospitalDetails } from "../configs/hospitalDetails";
import FasttagCard from "./FasttagCard";
import BookingTabs from "../Hospitals/TotalBookings/BookingTabs";

function FasttagHospitals() {
  const [showDetails, setshowDetails] = useState(false);
  return (
    <div>
      {showDetails ? (
        <div className="row mt-2">
          <BookingTabs />
        </div>
      ) : (
        <div className="row mt-2">
          {hospitalDetails.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
              <FasttagCard
                hospitalData={item}
                setshowDetails={setshowDetails}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FasttagHospitals;
