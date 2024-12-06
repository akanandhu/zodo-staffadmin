import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HospitalHero from "../../heros/HospitalHero";

import HospitalsList from "../../Hospitals/HospitalsList";
import HospitalRequest from "../../Hospitals/HospitalRequest";
import FasttagHospitals from "../../fasttag/FasttagHospitals";

function FasttagIssued() {
  const tabData = [
    { id: "allhospitals", title: "All Hosptitals", content: <FasttagHospitals/> },
    { id: "requested", title: "Requested Hospitals", content: <HospitalRequest/> },
  ];
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link:"/dashboard"
    },
    {
      name: "Fasttag Issued",
      status: "active",
      link:"/dashboard/fasttag-issued",
    },
  ];
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          {/* <FasttagRevenueHeader/> */}
          <HospitalHero tabData={tabData}/>
          <HospitalsList tabData={tabData} />
        </div>
      </div>
    </Layout>
  );
}

export default FasttagIssued;
