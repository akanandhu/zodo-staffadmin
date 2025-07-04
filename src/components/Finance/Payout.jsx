import { doctors, fasttag, profile_hospitals } from "../imagepath";
import Analytics from "../Dashboard/Analytics";
import SettlementCard from "./SettlementCard";
import BookingsTable from "../Dashboard/BookingsTable";
import PropTypes from "prop-types";

function Payout({ data }) {
  
  const basicInformation = [
    {
      id: 1,
      title: "Total Payout Request",
      icon: profile_hospitals,
      count: data?.settlement?.requested || 0,
      percentageUp: 20,
      link: "",
      type: "currency",
    },
    {
      id: 2,
      title: "Pending Settlement",
      icon: doctors,
      count: data?.settlement?.pending || 0,
      percentageUp: 40,
      link: "",
      type: "currency",
    },
    {
      id: 3,
      title: "Total Transaction",
      icon: fasttag,
      count: data?.settlement?.total || 0,
      percentageUp: 40,
      link: "",
      type: "currency",
    },
    {
      id: 4,
      title: "Normal Booking Revenue",
      icon: fasttag,
      count: data?.booking?.revenue || 0,
      percentageUp: 40,
      link: "",
      type: "currency",
    },
    {
      id: 5,
      title: "Fast Tag Revenue",
      icon: fasttag,
      count: data?.fasttag?.revenue || 0,
      percentageUp: 40,
      link: "",
      type: "currency",
    },
    {
      id: 6,
      title: "Next Settlement Date",
      icon: fasttag,
      count: 121,
      percentageUp: 40,
      link: "",
      type: "paymentrequest",
    },
  ];
  const bookingType = [
    { value: 1, label: "Fasttag Booking" },
    { value: 2, label: "Normal Booking" },
  ];
  return (
    <div>
      <div className="row mt-3">
        <SettlementCard info={basicInformation} />
      </div>
      <Analytics bookingType={bookingType} id="appointment-chart" />
      <BookingsTable />
    </div>
  );
}

// props validation
Payout.propTypes = {
  data: PropTypes.object,
};

export default Payout;
