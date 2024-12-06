import React from "react";
import { pencil_icon } from "../../imagepath";
import { Link, useParams } from "react-router-dom";

function ReviewBank() {
  const { id } = useParams(); 
  return (
    <div className="card-box">
      <div className="row">
        <div className="col">
          <h4 className="card-title">Bank Info</h4>
        </div>
        <div className="col d-flex justify-content-end">
          <Link to={`/manage-hospitals/manage-request/${id}/edit`}>
            <img src={pencil_icon} alt="edit" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className="row pt-3 pb-1">
        <div className="col">
          <ul className="payment-info w-1">
            <li>
              <span className="payment-title">
                Account Number: <span>111234567900</span>
              </span>
            </li>
            <li className="mt-3 mb-3">
              <span className="payment-title">Bank Name: Federal</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="payment-info">
            <li>
              <span className="payment-title">IFSC Code: 111234567900</span>
            </li>
            <li className="mt-3 mb-3">
              <span className="payment-title">UPI ID: 123@oksbi</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReviewBank;
