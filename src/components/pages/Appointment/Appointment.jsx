import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import RequestedAppointments from "../../Appointment/RequestedAppointments";
import AppointmentFasttags from "../../Appointment/AppointmentFasttags";
import Appointments from "../../Appointment/Appointments";
import { useAuth } from "../../../hooks/useAuth";
import { useHospitalAppointments } from "../../../hooks/appointments/useHospitalAppointments";
import ButtonTabs from "../../tabs/ButtonTabs";
// import Appointments from '../../Appointment/Appointments'
function Appointment() {
  const { hospitalId } = useAuth();
  const { data: appointmentsList, isLoading } =
    useHospitalAppointments(hospitalId);
  console.log("Appointments List: ", appointmentsList);
    
  // const requestedQuery = `timeSlot=0`;
  // const { data: requestedList, isLoading: requestedLoading } =
  //   useHospitalAppointments(hospitalId, requestedQuery);
  const requestedList = appointmentsList?.filter(
    (item) => item.timeSlot === null 
  );
  console.log("Requested appointments",requestedList);
  
  const appointmentTab = [
    {
      id: "appointment",
      title: "Appoinment",
      content: (
        <Appointments
          appointments={appointmentsList ?? []}
          loading={isLoading}
        />
      ),
      link: "appointment",
    },
    {
      id: "requested",
      title: "Requested",
      content: (
        <RequestedAppointments
          appointments={requestedList ?? []}
          loading={isLoading}
        />
      ),
      link: "requested",
    },
    {
      id: "fasttag",
      title: "Fast Tag",
      content: <AppointmentFasttags />,
      link: "fasttag",
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
          <ButtonTabs tabData={appointmentTab} />
        </div>
      </div>
    </Layout>
  );
}

export default Appointment;
