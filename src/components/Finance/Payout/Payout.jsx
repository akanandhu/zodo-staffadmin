import React from "react";
import InfoCards from "../../Dashboard/Info_cards";
import BookingsTable from "../../Dashboard/BookingsTable";
import { doctors, fasttag, profile_hospitals } from "../../imagepath";
import Analytics from "../../Dashboard/Analytics";

function Payout() {
  const basicInformation = [
    {
      id: 1,
      title: "Total Payout Requests",
      icon: profile_hospitals,
      count: 140,
      percentageUp: 20,
      link: "",
    },
    {
      id: 2,
      title: "Pending Settlement",
      icon: doctors,
      count: 250,
      percentageUp: 40,
      link: "",
    },
    {
      id: 3,
      title: "Payout Scheduled On",
      icon: fasttag,
      count: 121,
      percentageUp: 40,
      link: "",
    },
    {
      id: 4,
      title: "Total Revenue Received",
      icon: fasttag,
      count: 121,
      percentageUp: 40,
      link: "",
    },
    {
      id: 5,
      title: "Fast Tag Revenue",
      icon: fasttag,
      count: 121,
      percentageUp: 40,
      link: "",
    },
    {
      id: 6,
      title: "Next Settlement Date",
      icon: fasttag,
      count: 121,
      percentageUp: 40,
      link: "",
    },
  ];
  const bookingType = [
    { value: 1, label: "Fasttag Booking" },
    { value: 2, label: "Normal Booking" },
  ];
  return (
    <div>
      <div className="row mt-3">
        <InfoCards info={basicInformation} />
      </div>
      <Analytics bookingType={bookingType} id="appointment-chart" />
      <BookingsTable />
    </div>
  );
}

export default Payout;
