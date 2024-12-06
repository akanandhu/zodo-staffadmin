import React from "react";
import BookingsCard from "./BookingsCard";
import BookingTabs from "./BookingTabs";

function TotalBookings() {
  const bookinsDetails = [
    {
      id: 1,
      bookings: "12,000",
      dueStatus:"",
      operation: "Total Bookings",
    },
    {
      id: 2,
      bookings: "5000",
      dueStatus:"",
      operation: "Total Fast Tag Booking",
    },
    {
      id: 3,
      bookings: "12",
      dueStatus:"No Dues",
      operation: "Cancellation",
    },
  ];
  return (
    <div className="pb-3">
      <div className="row mt-2">
        {bookinsDetails.map((item) => (
          <div
            key={item.id + item.operation}
            className="col-md-4 col-sm-6 col-lg-4 col-xl-4"
          >
            <BookingsCard data={item} />
          </div>
        ))}
      </div>
      <div className="card-box bookings-card">
        <BookingTabs />
      </div>
    </div>
  );
}

export default TotalBookings;
