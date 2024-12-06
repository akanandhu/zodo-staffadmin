import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import SettlementRequest from "../../Dashboard/Settlement/SettlementRequest";
import ReviewFasttag from "../../Dashboard/Settlement/ReviewFasttag";
import ReviewBank from "../../Dashboard/Settlement/ReviewBank";
import UploadedDocuments from "../../Dashboard/Settlement/UploadedDocuments";
import SettlementOperations from "../../Dashboard/Settlement/SettlementOperations";

function ManageRequest() {
  const { id } = useParams();

  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Hospital Requests",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: id,
      status: "active",
      link: `/manage-hospitals/manage-request/${id}`,
    },
  ];
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <SettlementRequest />
          <ReviewFasttag />
          <ReviewBank />
          <UploadedDocuments />
          <SettlementOperations />
        </div>
      </div>
    </Layout>
  );
}

export default ManageRequest;
