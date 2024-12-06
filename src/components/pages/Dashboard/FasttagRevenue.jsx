import React from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Analytics from "../../Dashboard/Analytics";
import FasttagDetails from "../../FasttagRevenue/FasttagDetails";
import BasicHero from "../../heros/BasicHero";
import Layout from "../../layout/Layout";

function FasttagRevenue() {
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Fasttag Revenue",
      status: "active",
      link:"/dashboard/fasttag-revenue",
    },
  ];
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          {/* <FasttagRevenueHeader/> */}
          <BasicHero title="Fast Tag Revenue" />
          <Analytics />
          <FasttagDetails />
        </div>
      </div>
    </Layout>
  );
}

export default FasttagRevenue;
