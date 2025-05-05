import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pencil_icon } from "../../imagepath";
import PropTypes from "prop-types";
import { apollo_logo } from "../../imagepath";
import EditService from "../../modals/AddService/EditService";
function ServiceCard(props) {
  const { servicesData } = props;
  const [show, setShow] = useState(false);
  const handleEdit = () => {
    setShow(true);
  };
  return (
    <div className="card invoices-grid-card w-100">
      <Link to={`/hospital/services/${servicesData.id}`}>
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <img src={apollo_logo} alt="#" />
            </div>
            <div className="col-auto d-flex justify-content-between align-items-center">
              <Link to title="Edit Services" onClick={handleEdit}>
                <img
                  src={pencil_icon}
                  alt="#"
                  width={15}
                  height={15}
                  className="me-2"
                />
              </Link>
              {/* <img src={right_chevron} alt="#" width={12} height={12}/> */}
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>{servicesData.name}</h5>
              </div>
              <div className="col-auto">
                <h5 className="text-primary">active</h5>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p>TOTAL FAST TAG</p>
              </div>
              <div className="col-auto">
                <h5>0</h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <EditService show={show} setShow={setShow} selectedService={servicesData.id}/>
    </div>
  );
}

ServiceCard.propTypes = {
  servicesData: PropTypes.node,
};

export default ServiceCard;
