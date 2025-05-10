import Timeslots from "./Timeslots/Timeslots";
import ModalTabs from "../../tabs/ModalTabs";

function DoctorTimeslot() {
  const tabData = [
    { id: "morning", title: "Morning", content: <Timeslots /> },
    { id: "afternoon", title: "Afternoon", content: <Timeslots /> },
    {
      id: "evening",
      title: "Evening",
      content: <Timeslots />,
    },
  ];
  return (
    <div className="doctor-timeslot mt-3">
      <ModalTabs tabData={tabData} />
    </div>
  );
}

export default DoctorTimeslot;
