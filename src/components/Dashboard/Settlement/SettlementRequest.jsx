import React from "react";
import { Link, useParams } from "react-router-dom";
import { apollo_logo, pencil_icon} from "../../imagepath";

function SettlementRequest() {
  const { id } = useParams(); 
  return (
    <div className="card-box ms-1 me-1 mt-3">
      <div className="row">
        <div className="col-6">
          <h4>Company Info</h4>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Link to={`/manage-hospitals/manage-request/${id}/edit`}>
          <img src={pencil_icon} alt="edit" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className="row mt-2">
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
              <div className="mt-2">
                <Link to className="fs-6">
                  www.appolo.com
                </Link>
              </div>
            </div>
            <div className="col ps-3">
              <div className="profile-info-left pt-3">
                <h3 className="user-name m-t-0 mb-0">Apollo Hospital</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <ul className="personal-info">
            <li>
              <span className="text">
                <div className="text-dark pe-5">
                  Plot No 283/A, Incur 9, 3rd Floor, Kavuri Hills, Madhapur,
                  Hyderabad
                </div>
                <div className="mt-2">
                  +91 0000000
                </div>
              </span>
            </li>
          </ul>
        </div>

        <div className="col-md-4 pt-4 ps-md-5 pt-md-2">
          <h6>
            <span>GSTIN : </span><span className="fw-semibold text-black">GSTIN567890128347</span> 
          </h6>
        </div>
      </div>

      <div className="row pt-3">
        <div className="ps-2 col-sm-12 col-md-4 personal-info d-flex justify-content-start">
          <span className="title text-secondary">Bill Company :</span>
          <span className="text">
            <p className="ms-2">Apollo</p>
          </span>
        </div>
        <div className="ms-2 ms-md-0 col-sm-12 col-md-4 personal-info d-flex justify-content-md-center">
          <span className="title text-secondary">Admin :</span>
          <span className="text">
            <p className="ms-2">Aswin K</p>
          </span>
        </div>
        <div className="ms-2 ms-md-0 col-sm-12 pe-2 col-md-4 personal-info d-flex justify-content-md-end">
          <span className="title text-secondary">Admin Email:</span>
          <span className="text">
            <p className="w-md-75 ms-2">Aswin@example.com</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SettlementRequest;
