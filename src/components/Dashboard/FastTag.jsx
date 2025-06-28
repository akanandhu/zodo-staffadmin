import React from "react";
import InfoCards from "./Info_cards";
import { doctors, fasttag, profile_hospitals } from "../imagepath";
import Analytics from "./Analytics";
import BookingsTable from "./BookingsTable";
import PropTypes from "prop-types";

function FastTag({ data }) {
  const { count, revenue } = data || {};
  const basicInformation = [
    {
      id: 1,
      title: "Total FASTag/day",
      icon: profile_hospitals,
      count: 140,
      percentageUp: 20,
      link: "",
      type: "count",
    },
    {
      id: 2,
      title: "Total FASTag Issued",
      icon: doctors,
      count: count || 0,
      percentageUp: 40,
      link: "",
      type: "count",
    },
    {
      id: 3,
      title: "Total FASTag Revenue",
      icon: fasttag,
      count: revenue || 0,
      percentageUp: 40,
      link: "",
      type: "currency",
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
      <Analytics bookingType={bookingType} id="fasttag-chart" />
      <BookingsTable />
    </div>
  );
}

// props validation
FastTag.propTypes = {
  data: PropTypes.object,
};

export default FastTag;
