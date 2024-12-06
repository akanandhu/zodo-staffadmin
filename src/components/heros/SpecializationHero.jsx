import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../searchbox/SearchBox";
import AddSpecialization from "../modals/AddSpecialization";
import { addicon, uploadfiles_icon } from "../imagepath";

function SpecializationHero() {
  const [show, setShow] = useState(false);
  return (
    <div className="page-header invoices-page-header mt-3">
      <div className="row align-items-center">
        <div className="col-12 col-md-1 hero-title">
          <h5>Specialisation</h5>
        </div>
        <div className="col-12 col-md-3 ms-md-3">
          <div className="doctor-list-search">
            <div className="search-container">
              <SearchBox />
            </div>
          </div>
        </div>
        <div className="col-md col-sm-12">
          <div className="d-flex justify-content-md-end">
            <Link
              to="#"
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-draft-btn rounded-pill text-primary ps-4 pe-4 pt-2 pb-2 me-2"
            >
              <img src={uploadfiles_icon} alt="upload" />
              <span className="ms-2 me-2"> Upload Files</span>
            </Link>
            <Link
              to
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2 me-2"
              onClick={() => setShow(true)}
            >
              <img src={addicon} alt="add" />
              <span className="ms-2 me-2"> Add Specialisation</span>
            </Link>
          </div>
        </div>
      </div>
      <AddSpecialization show={show} setShow={setShow} />
    </div>
  );
}

export default SpecializationHero;
