import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import { useParams } from "react-router-dom";
import { useValidateId } from "../../../hooks/useValidateId";
import { useViewService } from "../../../hooks/hospital-services/useViewService";
import ServiceDetails from "../../Hospitals/Services/ServiceDetails";

function ViewHospitalService() {
  const { id } = useParams();
  const { validId } = useValidateId(id);
  const { data: service } = useViewService(validId);  
  
  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/hospital/services",
    },
    {
      name: "Services",
      status: "inactive",
      link: "/hospital/services",
    },
    {
      name: service?.name,
      status: "active",
      link: `/hospital/services/${validId}`,
    },
  ];
  return (
    <Layout
      activeClassName="hospital-services"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <ServiceDetails serviceDetails={service ?? {}}/>
        </div>
      </div>
    </Layout>
  );
}

export default ViewHospitalService;
