import React from "react";
import { Link } from "react-router-dom";
import FastTags from "./FastTags";
import Cancellation from "./Cancellation";
import BookingsList from "./BookingsList";

function BookingTabs() {
  const tabData = [
    {
      id: "totalBookings",
      title: "Total Bookings",
      content: <BookingsList />,
    },
    {
      id: "fastTags",
      title: "Fast Tags",
      content: <FastTags />,
    },
    {
      id: "cancellations",
      title: "Cancellations",
      content: <Cancellation />,
    },
  ];
  return (
    <div>
      <div className="card-box">
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
        </div>
      </div>
    </div>
  );
}

export default BookingTabs;
