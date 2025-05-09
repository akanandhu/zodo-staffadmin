import Layout from "../../layout/Layout";
import Hero from "../../Dashboard/hero";
// import InfoCards from "../../Dashboard/Info_cards";
// import { fasttag, profile_hospitals, doctors } from "../../imagepath";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import AppointmentInfo from "../../Dashboard/AppointmentInfo";
import FastTag from "../../Dashboard/FastTag";
import HospitalStaf from "../../Dashboard/HospitalStaf";
import ButtonTabs from "../../tabs/ButtonTabs";
function Dashboard() {
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "active",
      link: "/",
    },
  ];

  const dashboardTab = [
    {
      id: "appointment",
      title: "Appointment",
      content: <AppointmentInfo />,
      link: "appointment",
    },
    {
      id: "hospitalstaff",
      title: "Hospital Staff",
      content: <HospitalStaf />,
      link: "staff",
    },
    {
      id: "fasttag",
      title: "Fasttag",
      content: <FastTag />,
      link:"fasttag"
    },
    // {
    //   id: "stafs",
    //   title: "Hospital Staffs",
    //   content: <HospitalStaffs />,
    // },
  ];
  return (
    <Layout activeClassName="">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <Hero />
          <ButtonTabs tabData={dashboardTab} />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
