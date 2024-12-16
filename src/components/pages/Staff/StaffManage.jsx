import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import BasicHero from "../../heros/BasicHero";
import StaffSearch from "../../Staffs/StaffSearch";
import StaffTable from "../../Tables/StaffTable";

function  StaffManage() {
    const breadCrumpData = [
        {
          name: "Staff",
          status: "active",
          link: "/staff-manage",
        },
      ];
  return (
    <Layout activeClassName="staff-manage" id="menu-item5" id1="menu-items5">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          {/* <Tabs tabData={appointmentTab} /> */}
          <BasicHero title="Staff Details (4)" />
          <StaffSearch />
          <StaffTable />
        </div>
      </div>
    </Layout>
  );
}

export default StaffManage;
