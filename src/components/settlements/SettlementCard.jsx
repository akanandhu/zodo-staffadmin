import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SettlementCard(props) {
  const { data } = props;
  return (
    <div className="card invoices-grid-card w-100">
      <Link to={`/dashboard/settlement-requests/${data.id}`}>
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <img src={data.icon} alt="#" />
            </div>
            <div className="col-auto">
              <span className="text-success">●</span>
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>{data.name}</h5>
              </div>
              <div className="col-auto">
                <h5 className="text-primary">{data.status}</h5>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p className={`${data.dueStatus === "OVER DUE" ? "custom-badge status-red" :"custom-badge status-orange"}`}>{data.dueStatus}</p>
              </div>
              <div className="col-auto">
                <h5>{data.requestedAmount}</h5>
              </div>
            </div>

            <div className="row">
              <p>Requested On {data.requestedDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

SettlementCard.propTypes = {
  data: PropTypes.node,
};

export default SettlementCard;
