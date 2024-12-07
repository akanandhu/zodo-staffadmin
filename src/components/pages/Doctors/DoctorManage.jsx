import React from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import BasicHero from "../../heros/BasicHero";
import DoctorSearch from "../../Doctors/DoctorSearch";
import DoctorsTable from "../../Tables/DoctorsTable";

function DoctorManage() {
  const breadCrumpData = [
    {
      name: "Doctors",
      status: "active",
      link: "/doctor-manage",
    },
  ];
  return (
    <Layout activeClassName="doctor-manage" id="menu-item4" id1="menu-items4">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          {/* <Tabs tabData={appointmentTab} /> */}
          <BasicHero title="Doctor Details (4)"/>
          <DoctorSearch/>
          <DoctorsTable/>
        </div>
      </div>
    </Layout>
  );
}

export default DoctorManage;
