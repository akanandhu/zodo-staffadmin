import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../searchbox/SearchBox";

function ReviewHero() {
  return (
    <div className="page-header invoices-page-header mt-2">
      <div className="row align-items-center">
        <div className="col-12 col-md-1 hero-title">
          <h5>All Reviews</h5>
        </div>
        <div className="col-12 col-md-3 ms-md-3">
          <div className="doctor-list-search">
            <div className="search-container">
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="col-md col-sm-12">
          <div className="invoices-create-btn d-flex justify-content-md-end">
            <Link
              to="#"
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-draft-btn rounded-pill text-primary ps-5 pe-5 pt-2 pb-2"
            >
              Sort By
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewHero;
