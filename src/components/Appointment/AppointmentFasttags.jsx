import TransparentTabs from "../tabs/TransparentTabs";
import FasttagTable from "./FasttagTable";
// import TransparentTabs from '../tabs/TransparentTabs'
// import { appointmentTab } from '../configs/appointmentTab'

function AppointmentFasttags() {
  const appointmentRequestTab = [
    {
      id: "allFasttagAppointments",
      title: "All",
      content: <FasttagTable appointmentList={[]} />,
      link:'all',
      mainTab:'fasttag'
    },
    {
      id: "ongoingFasttags",
      title: "Ongoing",
      content: <FasttagTable appointmentList={[]} />,
      link:'ongoing',
      mainTab:'fasttag'
    },
    {
      id: "completedFasttags",
      title: "Completed",
      content: <FasttagTable appointmentList={[]} />,
      link:'completed',
      mainTab:'fasttag'
    },
  ];
  return (
    <div className="card-box mt-3">
      <TransparentTabs tabData={appointmentRequestTab} />
    </div>
  );
}

export default AppointmentFasttags;
