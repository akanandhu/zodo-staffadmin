import React from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
// import { useParams } from "react-router-dom";
import HospitalDetailsCard from "../../Hospitals/HospitalDetailsCard";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";

function HospitalDetails() {
  const { id } = useParams();
  const breadCrumpData = [
    {
      name:"Hospitals",
      status:"inactive",
      link: "/manage-hospitals",
    },
    {
      name:id,
      status:"active",
      link: `/manage-hospitals/${id}`,

    }
  ]
  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData}/>
          <HospitalDetailsCard />
        </div>
      </div>
    </Layout>
  );
}

export default HospitalDetails;
