import React from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import BasicHero from "../../heros/BasicHero";
import DoctorSearch from "../../Doctors/DoctorSearch";
import DoctorsTable from "../../Tables/DoctorsTable";
import { useDoctorsList } from "../../../hooks/doctors/useDoctorsList";
import { useAuth } from "../../../hooks/useAuth";

function DoctorManage() {
  const { user } = useAuth();
  const breadCrumpData = [
    {
      name: "Doctors",
      status: "active",
      link: "/doctor-manage",
    },
  ];
  const hospital_id = user && user["hospital_id"];
  const { data: doctorsList } = useDoctorsList(hospital_id);

  return (
    <Layout activeClassName="doctor-manage" id="menu-item4" id1="menu-items4">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          {/* <Tabs tabData={appointmentTab} /> */}
          <BasicHero title="Doctor Details (4)" />
          <DoctorSearch />
          <DoctorsTable doctorsList={doctorsList} />
        </div>
      </div>
    </Layout>
  );
}

export default DoctorManage;
