import AppointmentInfo from "../Dashboard/AppointmentInfo";
import FastTag from "../Dashboard/FastTag";
import HospitalStaf from "../Dashboard/HospitalStaf";

export const dashboardTab = [
  { id: "appointment", title: "Appointment", content: <AppointmentInfo /> },
  { id: "hospitalstaff", title: "Hospital Staff", content: <FastTag /> },
  {
    id: "fasttag",
    title: "Fasttag",
    content: <HospitalStaf />,
  },
  // {
  //   id: "stafs",
  //   title: "Hospital Staffs",
  //   content: <HospitalStaffs />,
  // },
];
