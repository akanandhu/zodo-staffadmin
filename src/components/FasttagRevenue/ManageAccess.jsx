import React from "react";
import { Link } from "react-router-dom";

function ManageAccess() {
  return (
    <div className="row mt-2 w-75">
      <div className="invoices-create-btn-table">
        <Link
          to="#"
          // data-bs-toggle="modal"
          // data-bs-target="#delete_invoices_details"
          className="btn hospital-draft-btn rounded-pill text-primary"
        >
          Contact them
        </Link>
        <Link
          to="#"
          // data-bs-toggle="modal"
          // data-bs-target="#save_invocies_details"
          className="btn hospital-add-btn rounded-pill ms-md-1"
        >
          Approve
        </Link>
      </div>
    </div>
  );
}

export default ManageAccess;
