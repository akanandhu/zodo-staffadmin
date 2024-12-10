import React from "react";
import { servicesList } from "../../configs/servicesList";
import ServiceCard from "./ServiceCard";

function ServicesList() {
  return (
    <div className="row">
      {servicesList.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          <ServiceCard servicesData={item} />
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
