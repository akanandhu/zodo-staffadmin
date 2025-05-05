import React from "react";
import BookingsTable from "../Dashboard/BookingsTable";
import { doctors, fasttag, profile_hospitals } from "../imagepath";
import Analytics from "../Dashboard/Analytics";
import SettlementCard from "./SettlementCard";

function Payout() {
  const basicInformation = [
    {
      id: 1,
      title: "Total Payout Requests",
      icon: profile_hospitals,
      count: 140,
      percentageUp: 20,
      link: "",
      type:"normal"
    },
    {
      id: 2,
      title: "Pending Settlement",
      icon: doctors,
      count: 250,
      percentageUp: 40,
      link: "",
      type:"normal"
    },
    {
      id: 3,
      title: "Total Transactions",
      icon: fasttag,
      count: 121,
      percentageUp: 40,
      link: "",
      type:"normal"
    },
    {
      id: 4,
      title: "Normal Booking Revenue",
      icon: fasttag,
      count: 14000,
      percentageUp: 40,
      link: "",
      type:"currency"
    },
    {
      id: 5,
      title: "Fast Tag Revenue",
      icon: fasttag,
      count: 25000,
      percentageUp: 40,
      link: "",
      type:"currency"
    },
    {
      id: 6,
      title: "Next Settlement Date (05 march)",
      icon: fasttag,
      count: 121,
      percentageUp: 40,
      link: "",
      type:"paymentrequest"
    },
  ];
  const bookingType = [
    { value: 1, label: "Fasttag Booking" },
    { value: 2, label: "Normal Booking" },
  ];
  return (
    <div>
      <div className="row mt-3">
        <SettlementCard info={basicInformation}/>
      </div>
      <Analytics bookingType={bookingType} id="appointment-chart" />
      <BookingsTable />
    </div>
  );
}

export default Payout;
