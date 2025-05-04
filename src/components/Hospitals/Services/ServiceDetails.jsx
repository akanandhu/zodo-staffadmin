import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    apollo_logo,
    arrow_left
} from "../../imagepath";
import PropTypes from "prop-types";

function ServiceDetails(props) {
  const { serviceDetails } = props;
  console.log(serviceDetails);
  
  const navigate = useNavigate();
  return (
    <div className="mt-3">
      <div className="card-box profile-header rounded-bottom-0">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="basic-hero-header">
              <Link to onClick={() => navigate(-1)}>
                <img src={arrow_left} alt="" />
              </Link>
              <span className="ms-3">Service Details</span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-3">
                <div className="hospital-img-wrap">
                  <div className="profile-img">
                    <Link to="#">
                      <img className="" src={apollo_logo} alt="#" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col ps-4">
                {/* <div className="col-md-4"> */}
                <div className="profile-info-left pt-3">
                  <h3 className="user-name m-t-0 mb-0">
                    {serviceDetails?.name}
                  </h3>
                  <small className="text-muted">
                    {serviceDetails?.description}
                  </small>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* <div className="col-md-4 ps-md-5">
            <ul className="personal-info ps-md-5">
              <li>
                <span className="text">
                  <Link to className="text-dark">
                    <img src={phone_icon} alt="phone" />{" "}
                    <span className="ms-1">770-889-6484</span>
                  </Link>
                </span>
              </li>
              <li>
                <span className="text">
                  <Link to className="text-dark">
                    <img src={email_icon} alt="email" />{" "}
                    <span className="ms-1">apollo@example.com</span>
                  </Link>
                </span>
              </li>
              <li>
                <span className="text">
                  <Link to>
                    <img src={search_outline_icon} alt="website" />{" "}
                    <span className="ms-1">www.apollo.com</span>
                  </Link>
                </span>
              </li>
            </ul>
          </div> */}

          {/* <div className="col-md-4 pt-4 ps-md-5 pt-md-2">
            <h6>
              <span>GSTIN</span>{" "}
              <span className="fw-semibold text-black">GSTIN567890128347</span>
            </h6>
            <button className="hospital-draft-btn text-primary w-75 mt-1 pt-1 pb-1">
              Active
            </button>
          </div> */}
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <ul className="personal-info">
              <li>
                <span className="title">Price:</span>
                <span className="text">
                  <p className="w-md-75 ms-3">
                    {serviceDetails?.price}
                  </p>
                </span>
              </li>
              <li>
                <span className="title">Strike Through price:</span>
                <span className="text">
                  <p className="w-md-75 ms-3">{serviceDetails?.strike_through_price}</p>
                </span>
              </li>
              {/* <li>
                <span className="title">State:</span>
                <span className="text">
                  <p className="w-md-75 ms-3">Telengana</p>
                </span>
              </li> */}
            </ul>
          </div>

          {/* <div className="col-md-5">
            <div className="row border border-secondary-subtle pt-3 pb-1">
              <div className="col">
                <ul className="payment-info w-1">
                  <li>
                    <span className="payment-title">
                      Account Number:{" "}
                      <span className="fw-semibold text-black">
                        111234567900
                      </span>
                    </span>
                  </li>
                  <li className="mt-3 mb-3">
                    <span className="payment-title">
                      Bank Name:{" "}
                      <span className="fw-semibold text-black">Federal</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="payment-info">
                  <li>
                    <span className="payment-title">
                      IFSC Code:{" "}
                      <span className="fw-semibold text-black">
                        111234567900
                      </span>
                    </span>
                  </li>
                  <li className="mt-3 mb-3">
                    <span className="payment-title">
                      UPI ID:{" "}
                      <span className="fw-semibold text-black">123@oksbi</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* <div className="col mt-4 mt-md-0">
            <FastTag />
          </div> */}
        </div>
      </div>
    </div>
  );
}

// props validation

ServiceDetails.propTypes = {
  serviceDetails: PropTypes.node,
};

export default ServiceDetails;
