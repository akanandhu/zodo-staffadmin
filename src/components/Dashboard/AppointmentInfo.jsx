import React from "react";
import InfoCards from "./Info_cards";
import { doctors, fasttag, profile_hospitals } from "../imagepath";
import Analytics from "./Analytics";
import BookingsTable from "./BookingsTable";
import PropTypes from "prop-types";

function AppointmentInfo({ data }) {
  const { request_count, count, revenue } = data || {};
  const basicInformation = [
    {
      id: 1,
      title: "Appointment Requests",
      icon: profile_hospitals,
      count: request_count || 0,
      percentageUp: 20,
      link: "",
      type:"count"
    },
    {
      id: 2,
      title: "Total Appointments",
      icon: doctors,
      count: count || 0,
      percentageUp: 40,
      link: "",
      type:"count"
    },
    {
      id: 3,
      title: "Appointment Revenue",
      icon: fasttag,
      count: revenue || 0,
      percentageUp: 40,
      link: "",
      type:"currency"
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

// props validation
AppointmentInfo.propTypes = {
  data: PropTypes.object,
};

export default AppointmentInfo;
