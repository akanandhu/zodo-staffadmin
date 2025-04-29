/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dashboard, logout_01, menuicon08 } from "./imagepath";
import Scrollbars from "react-custom-scrollbars-2";
import { useAuth } from "../hooks/useAuth";

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState("");
  const { user } = useAuth();
  const userRole = user?.user_type;
  const handleClick = (e, item, item1, item3) => {
    const div = document.querySelector(`#${item}`);
    const ulDiv = document.querySelector(`.${item1}`);
    if (ulDiv) {
      ulDiv.style.display === "block"
        ? (ulDiv.style.display = "none")
        : (ulDiv.style.display = "block");
      div.classList.contains("subdrop")
        ? div.classList.remove("subdrop")
        : div.classList.add("subdrop");
    }
  };

  useEffect(() => {
    if (props?.id && props?.id1) {
      const ele = document.getElementById(`${props?.id}`);
      handleClick(ele, props?.id, props?.id1);
    }
  }, []);

  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };

  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div
              id="sidebar-menu"
              className="sidebar-menu"
              onMouseLeave={expandMenu}
              onMouseOver={expandMenuOpen}
            >
              <ul className="mt-5">
                {userRole === "hsAdmin" && (
                  <li className="submenu">
                    <Link
                      className={
                        props?.activeClassName === "" ? "active" : ""
                      }
                      id="menu-item"
                      to="/"
                    >
                      <span className="menu-side">
                        <img src={dashboard} alt="" />
                      </span>{" "}
                      <span> Dashboard </span>
                      {/* <span className="menu-arrow" /> */}
                    </Link>
                  </li>
                )}

                {userRole === "staff" && (
                  <li className="submenu">
                    <Link
                      className={
                        props?.activeClassName === "appointment" ? "active" : ""
                      }
                      id="menu-item2"
                      to="/appointment"
                    >
                      <span className="menu-side">
                        <img src={menuicon08} alt="" />
                      </span>{" "}
                      <span> Appointment </span>
                    </Link>
                  </li>
                )}

                {userRole === "hsAdmin" && (
                  <li className="submenu">
                    <Link
                      className={
                        props?.activeClassName === "doctor-manage"
                          ? "active"
                          : ""
                      }
                      id="menu-item4"
                      to="/doctor-manage"
                    >
                      <span className="menu-side">
                        <img src={menuicon08} alt="" />
                      </span>{" "}
                      <span> Doctor Manage </span>
                    </Link>
                  </li>
                )}

                {userRole === "hsAdmin" && (
                  <li className="submenu">
                    <Link
                      className={
                        props?.activeClassName === "staff-manage"
                          ? "active"
                          : ""
                      }
                      id="menu-item5"
                      to="/staff-manage"
                    >
                      <span className="menu-side">
                        <img src={menuicon08} alt="" />
                      </span>{" "}
                      <span> Staff Manage </span>
                    </Link>
                  </li>
                )}

                {userRole === "hsAdmin" && (
                  <li className="submenu">
                    <Link
                      to="/hospital-services"
                      id="menu-item3"
                      onClick={(e) =>
                        handleClick(
                          e,
                          "menu-item3",
                          "menu-items3",
                          "menu-items3"
                        )
                      }
                      className={
                        props?.activeClassName === "hospital-services" ||
                        props?.activeClassName === "manage-doctors"
                          ? "active"
                          : ""
                      }
                    >
                      <span className="menu-side">
                        <img src={menuicon08} alt="" />
                      </span>{" "}
                      <span> Hospital </span> <span className="menu-arrow" />
                    </Link>
                    <ul style={{ display: "none" }} className="menu-items3">
                      <li>
                        <Link
                          className={
                            props?.activeClassName === "hospital-services"
                              ? "submenu-active"
                              : "submenu-normal"
                          }
                          to="/hospital-services"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            props?.activeClassName === "manage-doctors"
                              ? "submenu-active"
                              : "submenu-normal"
                          }
                          to="#"
                        >
                          Department
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            props?.activeClassName === "manage-doctors"
                              ? "submenu-active"
                              : "submenu-normal"
                          }
                          to="#"
                        >
                          Edit Hospital
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
              <div className="logout-btn submenu">
                <Link
                  to="/login"
                  className={
                    props?.activeClassName === "dashboard" ? "active" : ""
                  }
                >
                  <span className="menu-side">
                    <img src={logout_01} alt="" />
                  </span>{" "}
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
export default Sidebar;
