import React from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import BasicHero from "../../heros/BasicHero";
import ServiceSearch from "../../Hospitals/Services/ServiceSearch";
import ServicesList from "../../Hospitals/Services/ServicesList";
import { useServicesList } from "../../../hooks/useServicesList";

function HospitalServices() {
  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/hospital-services",
    },
    {
      name: "Services",
      status: "active",
      link: "/hospital-services",
    },
  ];

  const { data: servicesList } = useServicesList();
  return (
    <Layout
      activeClassName="hospital-services"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <BasicHero title="Services" />
          <ServiceSearch />
          <ServicesList servicesData={servicesList}/>
          {/* <HospitalHero tabData={tabData} />
          <HospitalsList tabData={tabData} /> */}
          {/* <LoadMore/> */}
        </div>
      </div>
    </Layout>
  );
}

export default HospitalServices;
