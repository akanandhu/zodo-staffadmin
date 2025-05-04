import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function FinanceTabs(props) {
  const { tabData } = props;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded mt-3 bg-white tabs-list">
          {tabData.map((item, i) => (
            <li
              className="nav-item bg-white rounded-pill p-2"
              key={item.id + i}
            >
              <Link
                className={`nav-link ${i === 0 ? "active" : ""}`}
                to={`#${item.id}`}
                data-bs-toggle="tab"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* <Link className="nav-item bg-primary rounded-pill p-2 text-white">hi</Link> */}
      </div>
      <div className="tab-content">
        {tabData.map((item, i) => (
          <div
            className={`tab-pane ${i === 0 ? "show active" : ""}`}
            id={`${item.id}`}
            key={item.id}
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
}

// validate props
FinanceTabs.propTypes = {
  tabData: PropTypes.node,
};

export default FinanceTabs;
