import React from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import DoctorsList from "../../Doctors/DoctorsList";
import { Link } from "react-router-dom";
import DoctorRequests from "../../Doctors/DoctorRequests";

function Doctors() {
  const breadCrumpData = [
    {
      name: "Doctors",
      status: "active",
      link: "/manage-doctors",
    },
  ];
  const tabData = [
    { id: "dr_list", title: "All Doctors", content: <DoctorsList /> },
    {
      id: "dr_request",
      title: "Doctor Request (10)",
      content: <DoctorRequests />,
    },
    // { id: "dr_finance", title: "Finance", content: <DoctorsFinance/> },
    // { id: "dr_bookings", title: "Total Bookings", content: <DoctorsBookings/> },
  ];
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <div className="card-box mt-3">
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
                  <Link
                    className={`tab-pane ${i == 0 ? "show active" : ""}`}
                    id={tabItem.id}
                    key={tabItem.id + i}
                  >
                    {tabItem.content}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Doctors;
