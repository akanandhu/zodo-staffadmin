import PropTypes from "prop-types";
import Availability from "./Timeslots/Availability";

function DoctorTimeslot(props) {
  const { selectedDoctor } = props;
  // const tabData = [
  //   { id: "morning", title: "Morning", content: <Timeslots /> },
  //   { id: "afternoon", title: "Afternoon", content: <Timeslots /> },
  //   {
  //     id: "evening",
  //     title: "Evening",
  //     content: <Timeslots />,
  //   },
  // ];
  return (
    <div className="doctor-timeslot mt-3">
      <Availability selectedDoctor={selectedDoctor}/>
      {/* <ModalTabs tabData={tabData} /> */}
    </div>
  );
}

// props validation
DoctorTimeslot.propTypes = {
  selectedDoctor: PropTypes.object,
};

export default DoctorTimeslot;
