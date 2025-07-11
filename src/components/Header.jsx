/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, baricon1, user_profile } from "./imagepath";
import { useAuth } from "../hooks/useAuth";
import { useViewHospital } from "../hooks/hospital/useViewHospital";
import ConfirmLogout from "./modals/ConfirmLogout";

const Header = () => {
  const { user, setUser, hospitalId } = useAuth();
  const navigate = useNavigate();
  const userName = user?.first_name + user?.last_name || "User";
  const userRole = user?.user_type || "Role";
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };
  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
    document.getElementsByTagName("html")[0].classList.toggle("menu-opened");
    document
      .getElementsByClassName("sidebar-overlay")[0]
      .classList.toggle("opened");
  };

  const openDrawer = () => {
    const div = document.querySelector(".main-wrapper");
    if (div?.className?.includes("open-msg-box")) {
      div?.classList?.remove("open-msg-box");
    } else {
      div?.classList?.add("open-msg-box");
    }
  };

  useEffect(() => {
    const handleClick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };

    const maximizeBtn = document.querySelector(".win-maximize");
    // maximizeBtn.addEventListener('click', handleClick);

    return () => {
      // maximizeBtn.removeEventListener('click', handleClick);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from local storage
    const token = localStorage.getItem("token"); // Check if the token is removed
    setUser(null); // Clear the user state
    navigate("/login"); // Redirect to the login page
  };
  const [isOpen, setIsOpen] = useState(false);

  const { data: hospital } = useViewHospital(hospitalId);
  return (
    <div className="main-wrapper">
      <div className="header">
        <div className="header-left">
          <Link
            to={user?.user_type === "hsAdmin" ? "/" : "/appointment"}
            className="logo"
          >
            <img src={logo} width={108} height={38} alt="" />{" "}
          </Link>
        </div>
        {/* <Link id="toggle_btn" to="#" onClick={handlesidebar}>
          <img src={baricon} alt="" />
        </Link> */}
        <Link
          id="mobile_btn"
          className="mobile_btn float-start"
          to="#"
          onClick={handlesidebarmobilemenu}
        >
          <img src={baricon1} alt="" />
        </Link>
        {/* <div className="top-nav-search mob-view">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <Link className="btn">
              <img src={searchnormal} alt="" />
            </Link>
          </form>
        </div> */}
        <ul className="nav user-menu float-end">
          {/* <li className="nav-item dropdown d-none d-sm-block">
            <Link
              onClick={openDrawer}
              id="open_msg_box"
              className="hasnotifications nav-link"
            >
              <img src={noteicon1} alt="" />
              <span className="pulse" />{" "}
            </Link>
          </li> */}
          <li className="nav-item dropdown has-arrow user-profile-list">
            <Link
              to="#"
              className="dropdown-toggle nav-link user-link"
              data-bs-toggle="dropdown"
            >
              <div className="user-names">
                <h5>{userName}</h5>
                <span>{userRole}</span>
              </div>
              <span className="user-img">
                <img src={user?.profile_picture || user_profile} alt="Admin" />
              </span>
            </Link>
            <div className="dropdown-menu">
              {/* <Link className="dropdown-item" to="/profile">
                My Profile
              </Link> */}
              {/* <Link className="dropdown-item" to="/edit-profile">
                Edit Profile
              </Link> */}
              {/* <Link className="dropdown-item" to="/settingssociallink">
                Settings
              </Link> */}
              <Link className="dropdown-item">{hospital?.name}</Link>
              <Link
                className="dropdown-item"
                // to="/login"
                onClick={() => setIsOpen(true)}
              >
                Logout
              </Link>
            </div>
          </li>
          {/* <li className="nav-item ">
            <Link to="/settings" className="hasnotifications nav-link">
              <img src={settingicon01} alt="" />{" "}
            </Link>
          </li> */}
        </ul>
        <div className="dropdown mobile-user-menu float-end">
          <Link
            to="#"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis-vertical" />
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            {/* <Link className="dropdown-item" to="/profile">
              My Profile
            </Link>
            <Link className="dropdown-item" to="edit-profile.html">
              Edit Profile
            </Link>
            <Link className="dropdown-item" to="/settings">
              Settings
            </Link> */}
            <Link className="dropdown-item">{hospital?.name}</Link>

            <Link className="dropdown-item" to onClick={() => setIsOpen(true)}>
              Logout
            </Link>
          </div>
        </div>
      </div>
      <ConfirmLogout
        show={isOpen}
        setShow={setIsOpen}
        handleLogout={handleLogout}
      />

      {/* Notifications */}
      <div className="notification-box">
        <div className="msg-sidebar notifications msg-noti">
          <div className="topnav-dropdown-header">
            <span>Messages</span>
          </div>
          <div className="drop-scroll msg-list-scroll" id="msg_list">
            <ul className="list-box">
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Richard Miles </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item new-message">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">John Doe</span>
                      <span className="message-time">1 Aug</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Tarah Shropshire </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Mike Litorus</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">
                        {" "}
                        Catherine Manseau{" "}
                      </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">D</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Domenic Houston </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">B</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Buster Wigton </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Rolland Webber </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Claire Mapes </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Melita Faucher</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Jeffery Lalor</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">L</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Loren Gatlin</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Tarah Shropshire</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <Link to="/chat">See all messages</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
