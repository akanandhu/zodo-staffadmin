import InfoCards from "./Info_cards";
import { doctors, fasttag, profile_hospitals } from "../imagepath";
import Analytics from "./Analytics";
import BookingsTable from "./BookingsTable";
import PropTypes from "prop-types";
import { useAuth } from "../../hooks/useAuth";
import { useViewHospital } from "../../hooks/hospital/useViewHospital";

function FastTag({ data }) {
  const { count, revenue } = data || {};
  console.log("DATA ", data);
  const { hospitalId } = useAuth();
  console.log(hospitalId);
  const { data: hospitalData } = useViewHospital(hospitalId)
  console.log(hospitalData);
  
  const basicInformation = [
    {
      id: 1,
      title: "Fasttag Status",
      icon: profile_hospitals,
      count: hospitalData?.fastTag?.enabled,
      percentageUp: 20,
      link: "",
      type: "fasttag",
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
    { value: "fast_tag", label: "Fasttag Booking" },
    { value: "normal", label: "Normal Booking" },
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
