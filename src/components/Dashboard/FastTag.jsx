import React from "react";
import InfoCards from "./Info_cards";
import { doctors, fasttag, profile_hospitals } from "../imagepath";
import Analytics from "./Analytics";  
import BookingsTable from "./BookingsTable";

function FastTag() {
  const basicInformation = [
    {
      id: 1,
      title: "Total Doctors",
      icon: profile_hospitals,
      count: 140,
      percentageUp: 20,
      link: "",
    },
    {
      id: 2,
      title: "Total Nurse",
      icon: doctors,
      count: 250,
      percentageUp: 40,
      link: "",
    },
    {
      id: 3,
      title: "Total Staff",
      icon: fasttag,
      count: 121,
      percentageUp: 40,
      link: "",
    },
  ];
  const bookingType = [{ value: 1, label: "Fasttag Booking" }, { value: 2, label: "Normal Booking" }];
  return (
    <div>
      <div className="row mt-3">
        <InfoCards info={basicInformation} />
      </div>
      <Analytics bookingType={bookingType} id="fasttag-chart"/>
      <BookingsTable/>
    </div>
  );
}

export default FastTag;
