import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Tabs from "../../tabs/Tabs";
import { appointmentTab } from "../../configs/appointmentTab";

function Appointment() {
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
