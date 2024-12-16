import React, { useState } from "react";
import SearchBox from "../searchbox/SearchBox";
import { Link } from "react-router-dom";
import AddSaff from "../modals/AddStaff/AddSaff";
import { addicon } from "../imagepath";

function StaffSearch() {
  const [show, setShow] = useState(false);
  return (

    <div className="page-header invoices-page-header">
      <div className="d-flex flex-column flex-md-row">
        <div className="w-50 d-flex align-items-center flex-column flex-md-row">
          <div className="search-hero-header">
            <h3>All Staffs</h3>
          </div>
          <div className="ms-3 w-50">
            <SearchBox />
          </div>
        </div>

        <div className="w-50 d-flex align-items-center justify-content-end flex-column flex-md-row">
          <div className="">
            <div className="invoices-create-btn d-flex justify-content-md-end">
              <Link
                to
                className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2"
                onClick={() => setShow(true)}
              >
                <img src={addicon} alt="add" />
                <span className="ms-2 me-2">Add Doctor</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AddSaff show={show} setShow={setShow} title="Add Staff" />
    </div>
  );
}

export default StaffSearch;
