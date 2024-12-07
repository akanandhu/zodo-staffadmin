import React from "react";
import Layout from "../../layout/Layout";
import Hero from "../../Dashboard/hero";
// import InfoCards from "../../Dashboard/Info_cards";
// import { fasttag, profile_hospitals, doctors } from "../../imagepath";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Tabs from "../../tabs/Tabs";
import { dashboardTab } from "../../configs/dashboadTab";

function Dashboard() {
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "active",
      link: "/dashboard",
    },
  ];

  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <Hero />
          <Tabs tabData={dashboardTab} />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
