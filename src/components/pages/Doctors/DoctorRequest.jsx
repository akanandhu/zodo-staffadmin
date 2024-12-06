import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import DoctorRequestCard from "../../Doctors/DoctorRequest/DoctorRequestCard";
import SettlementOperations from "../../Dashboard/Settlement/SettlementOperations";

function DoctorRequest() {
  const { id } = useParams();
  const breadCrumpData = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: "Request",
      status: "inactive",
      link: `/manage-doctors/request`,
    },
    {
      name: id,
      status: "active",
      link: `/manage-doctors/request/${id}`,
    },
  ];
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <DoctorRequestCard />
          <SettlementOperations />
        </div>
      </div>
    </Layout>
  );
}

export default DoctorRequest;
