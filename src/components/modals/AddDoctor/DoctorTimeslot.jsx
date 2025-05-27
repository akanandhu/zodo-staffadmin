import Availability from "./Timeslots/Availability";

function DoctorTimeslot() {
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
      <Availability />
      {/* <ModalTabs tabData={tabData} /> */}
    </div>
  );
}

export default DoctorTimeslot;
