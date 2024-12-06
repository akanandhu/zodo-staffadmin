import React from "react";
import { Link } from "react-router-dom";
import { searchnormal } from "../imagepath";

function HospitalHeader() {
  return (
    <div className="page-header invoices-page-header mt-4">
      <div className="row align-items-center">
        <div className="col">
          <ul className="breadcrumb invoices-breadcrumb">
            <li className="breadcrumb-item invoices-breadcrumb-item d-flex align-items-center">
              <h5>All Hospitals</h5>
              <div className="top-liv-search top-chat-search">
                <form>
                  <div className="chat-search pt-4 ms-3">
                    <div className="form-group me-2 mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                      />
                      <Link className="btn">
                        <img src={searchnormal} alt="#" />
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-9 col-md-auto col-lg-auto">
          <div className="invoices-create-btn">
            <Link
              to="/manage-hospitals/add-hospital"
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="btn hospital-add-btn rounded-pill ms-1"
            >
              Add Hospital
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalHeader;
