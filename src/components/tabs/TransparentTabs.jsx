import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function TransparentTabs(props) {
  const { tabData } = props;

  return (
    <>
      <div className="profile-tabs">
        <ul className="nav nav-tabs nav-tabs-bottom">
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
      <div className="tab-content">
        {tabData.map((tabItem, i) => (
          <div
            className={`tab-pane ${i == 0 ? "show active" : ""}`}
            id={tabItem.id}
            key={tabItem.id + i}
          >
            {tabItem.content}
          </div>
        ))}
      </div>
    </>
  );
}

TransparentTabs.propTypes = {
  tabData: PropTypes.node,
};

export default TransparentTabs;
