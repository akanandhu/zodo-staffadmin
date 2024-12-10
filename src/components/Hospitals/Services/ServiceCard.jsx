import React from "react";
import { Link } from "react-router-dom";
import { right_chevron } from "../../imagepath";
import PropTypes from "prop-types";

function ServiceCard(props) {
  const { servicesData } = props;
  return (
    <div className="card invoices-grid-card w-100" key={servicesData.id}>
      <Link to>
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <img src={servicesData.logo} alt="#" />
            </div>
            <div className="col-auto">
              <img src={right_chevron} alt="#" />
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>{servicesData.name}</h5>
              </div>
              <div className="col-auto">
                <h5 className="text-primary">{servicesData.status}</h5>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p>TOTAL FAST TAG</p>
              </div>
              <div className="col-auto">
                <h5>{servicesData.totalFasttags}</h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

ServiceCard.propTypes = {
    servicesData: PropTypes.node,
  };

export default ServiceCard;
