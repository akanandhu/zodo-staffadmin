import React, { useState } from "react";
import SearchBox from "../searchbox/SearchBox";
import { Link } from "react-router-dom";
import AddSaff from "../modals/AddStaff/AddSaff";
import { addicon } from "../imagepath";

function StaffSearch() {
  const [show, setShow] = useState(false);
  return (
    <div className="ps-3 pe-3 doctor-search card-box">
      <div className="row  d-flex align-items-center bg-white">
        <div className="col-12  col-md-1">
          <div className="doctor-table-blk">
            <h3>All Staffs</h3>
          </div>
        </div>
        <div className="col-12 col-md-3 ms-md-4">
          <div className="doctor-list-search">
            <div className="search-container pt-2">
              <SearchBox />
            </div>
          </div>
        </div>

        <div className="col-md col-sm-12">
          <div className="invoices-create-btn d-flex justify-content-md-end">
            <Link
              to
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              // className="hospital-add-btn rounded-pill ms-1"
              className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2"
            >
              <img src={addicon} alt="add" />
              <span className="ms-2 me-2" onClick={() => setShow(true)}>
                Add Staff
              </span>
            </Link>
          </div>
        </div>
      </div>
      <AddSaff show={show} setShow={setShow} title="Add Staff" />
    </div>
  );
}

export default StaffSearch;
