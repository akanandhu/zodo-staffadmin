import React from "react";
import SearchBox from "../searchbox/SearchBox";
import { Link } from "react-router-dom";
import { addicon } from "../imagepath";
import PropTypes from "prop-types";

function HospitalHero(props) {
  const {tabData} = props;

  return (
    <div className="page-header invoices-page-header mt-3">
      <div className="row align-items-center">
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
              to="/manage-hospitals/add-hospital"
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2"
            >
              <img src={addicon} alt="add" />
              <span className="ms-2 me-2">Add Hospital</span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="profile-tabs">
          <ul className="nav nav-tabs nav-tabs-bottom border-0">
            {tabData.map((tabItem, i) => (
              <li key={tabItem.id + i}>
                <Link
                  className={`nav-link ${i == 0 ? "active" : ""}`}
                  to={`#${tabItem.id}`}
                  data-bs-toggle="tab"
                >
                  {tabItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

HospitalHero.propTypes = {
  tabData: PropTypes.node,
};

export default HospitalHero;
