{
  /* /Page Header */
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { adduser } from "../imagepath";
import CreateStaffModal from "../modals/Dashboard/CreateStaffModal";
import CreateDoctorModal from "../modals/Dashboard/CreateDoctorModal";
import DepartmentMoadl from "../modals/Dashboard/DepartmentMoadl";
// import AddSaff from "../modals/AddStaff/AddSaff";
// import { morning_img_01 } from "../imagepath";
function Hero() {
  const [showCreateStaff, setShowCreateStaff] = useState(false);
  const [showAdminStaff, setShowAdminStaff] = useState(false);
  const [showCreateDoctor, setShowCreateDoctor] = useState(false);
  const [showDepartment, setShowDepartment] = useState(false);
  

  return (
    <div className="good-morning-blk mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="morning-user">
            <h2>
              Good Morning, <span>User</span>
            </h2>
            <p>Have a nice day</p>
          </div>
        </div>
        {/* <div className="col-md-6 position-blk">
          <div className="morning-img">
            <img src={morning_img_01} alt="#" />
          </div>
        </div> */}
        <div className="col-md-6 d-flex justify-content-end align-items-center pe-5">
          <div className="btn-group">
            <button
              type="button"
              className="btn-primary dropdown-toggle me-1 rounded-pill create-btn text-white"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Create
            </button>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="#" onClick={()=>setShowCreateStaff(true)}>
                <span>
                  <img src={adduser} alt="create" />
                </span>{" "}
                <span className="ps-1">Create a Staff</span>
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#" onClick={()=>setShowAdminStaff(true)}>
                <span>
                  <img src={adduser} alt="create" />
                </span>{" "}
                <span className="ps-1">Create a Admin Staff</span>
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#" onClick={()=>setShowCreateDoctor(true)}>
                <span>
                  <img src={adduser} alt="create" />
                </span>{" "}
                <span className="ps-1">Create a Doctor</span>
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#" onClick={()=> setShowDepartment(true)}>
                <span>
                  <img src={adduser} alt="create" />
                </span>{" "}
                <span className="ps-1">Create a Department</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CreateStaffModal show={showCreateStaff} setShow={setShowCreateStaff} title="Create Staff"/>
      <CreateStaffModal show={showAdminStaff} setShow={setShowAdminStaff} title="Create Admin Staff"/>
      <CreateDoctorModal show={showCreateDoctor} setShow={setShowCreateDoctor} title="Create Doctor"/>
      <DepartmentMoadl show={showDepartment} setShow={setShowDepartment} title="Create Department"/>
    </div>
  );
}

export default Hero;
