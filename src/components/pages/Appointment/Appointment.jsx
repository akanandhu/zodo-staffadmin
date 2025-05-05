import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Tabs from "../../tabs/Tabs";
import RequestedAppointments from "../../Appointment/RequestedAppointments";
import AppointmentFasttags from "../../Appointment/AppointmentFasttags";
import Appointments from "../../Appointment/Appointments";
import { useAuth } from "../../../hooks/useAuth";
import { useHospitalAppointments } from "../../../hooks/appointments/useHospitalAppointments";
// import Appointments from '../../Appointment/Appointments'
function Appointment() {
  const { hospitalId } = useAuth();
  const { data: appointmentsList, isLoading } = useHospitalAppointments(hospitalId);
  console.log("Hospital id ", appointmentsList);

  const appointmentTab = [
    { id: "appointment", title: "Appoinment", content: <Appointments appointments={appointmentsList} loading={isLoading}/> },
    { id: "requested", title: "Requested", content: <RequestedAppointments /> },
    {
      id: "fasttag",
      title: "Fast Tag",
      content: <AppointmentFasttags />,
    },
  ];

  const breadCrumpData = [
    {
      name: "Appointment",
      status: "active",
      link: "/appointment",
    },
  ];

  return (
    <Layout activeClassName="appointment" id="menu-item2" id1="menu-items2">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <Tabs tabData={appointmentTab} />
        </div>
      </div>
    </Layout>
  );
}

export default Appointment;
