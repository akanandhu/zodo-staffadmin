import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import SpecializationHero from "../../heros/SpecializationHero";
import SpecializationList from "../../Doctors/Specialization/SpecializationList";

function Specialization() {
  const breadCrumpData = [
    {
      name: "Doctors",
      status: "inactive",
      link:"/manage-doctors",
    },
    {
      name: "Specialization",
      status: "active",
      link:"/manage-doctors/specialization",
    },
  ];
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <SpecializationHero/>
          <SpecializationList/>
        </div>
      </div>
    </Layout>
  );
}

export default Specialization;
