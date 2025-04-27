import AppointmentFasttags from "../Appointment/AppointmentFasttags";
import Appointments from "../Appointment/Appointments";
import AppointmentTable from "../Appointment/AppointmentTable";
import RequestedAppointments from "../Appointment/RequestedAppointments";
import { appointmentList } from "./appointmentList";

export const appointmentTab = [
  { id: "appointment", title: "Appoinment", content: <Appointments /> },
  { id: "requested", title: "Requested", content: <RequestedAppointments /> },
  {
    id: "fasttag",
    title: "Fast Tag",
    content: <AppointmentFasttags />,
  },
];

const ongoingAppointments = appointmentList?.filter((item)=> item.status === "Pending");
const cancelledAppointments = appointmentList?.filter((item)=> item.status === "Cancelled");
const completedAppointments = appointmentList?.filter((item)=> item.status === "Completed");


export const appointmentDataTab = [
    { id: "allAppointments", title: "All", content: <AppointmentTable appointmentList={appointmentList}/> },
    { id: "ongoing", title: "Ongoing", content: <AppointmentTable appointmentList={ongoingAppointments}/> },
    {
      id: "cancelled",
      title: "Cancelled",
      content: <AppointmentTable appointmentList={cancelledAppointments}/>,
    },
    {
        id: "completed",
        title: "Completed",
        content: <AppointmentTable appointmentList={completedAppointments}/>,
      },
  ];
