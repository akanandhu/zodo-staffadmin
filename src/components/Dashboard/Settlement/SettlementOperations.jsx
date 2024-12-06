import React from "react";
import { useNavigate } from "react-router-dom";

function SettlementOperations() {
  const navigate = useNavigate();
  return (
    <div className="row pb-4">
      <div className="settings-btns col-md-6 col-sm-12">
        <button
          type="submit"
          className="btn-outline-primary rounded pt-2 pb-2 ps-5 pe-5 d-none d-md-block"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        &nbsp;&nbsp;
      </div>

      <div className="settings-btns col-md-6 col-sm-12 mt-md-0 mt-2">
        <div className="d-flex justify-content-md-end justify-content-center flex-column flex-md-row">
          <button
            type="submit"
            className="btn-outline-primary rounded pt-2 pb-2 ps-5 pe-5"
          >
            Decline
          </button>
          &nbsp;&nbsp;
          <button
            type="submit"
            className="btn-outline-primary rounded pt-2 pb-2 ps-4 pe-4"
          >
            Contact Them
          </button>
          &nbsp;&nbsp;
          <button
            type="submit"
            className="border-0 btn-primary btn-main-primary text-white ps-5 pe-5"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettlementOperations;
