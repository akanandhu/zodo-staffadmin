import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import Settingssociallinks from "./components/settings/Settingssociallinks";
import SettingsChangePassword from "./components/settings/SettingsChangePassword";
import DoctorList from "./components/doctor/DoctorList";
import ForgotPassword from "./components/pages/login/ForgotPassword";
import Signup from "./components/pages/login/Signup";
import Register from "./components/pages/login/Register";
import LockScreen from "./components/pages/login/LockScreen";
import ChangePassword from "./components/pages/login/ChangePassword";
import Error from "./components/pages/login/Error";
import ServerError from "./components/pages/login/ServerError";
import BlankPage from "./components/pages/login/BlankPage";
import Setting from "./components/settings/Setting";
import Hospitals from "./components/pages/Hospitals/Hospitals";
import Doctors from "./components/pages/Doctors/Doctors";
import HospitalDetails from "./components/pages/Hospitals/HospitalDetails";
import EditHospital from "./components/pages/Hospitals/EditHospital";
import AddHospital from "./components/pages/Hospitals/AddHospital";
import DoctorDetails from "./components/pages/Doctors/DoctorDetails";
import AddDoctors from "./components/pages/Doctors/AddDoctors";
import Specialization from "./components/pages/Doctors/Specialization";
import FasttagIssued from "./components/pages/Dashboard/FasttagIssued";
import FasttagRevenue from "./components/pages/Dashboard/FasttagRevenue";
import SettlementRequests from "./components/pages/Dashboard/SettlementRequests";
import ManageSettlement from "./components/pages/Dashboard/ManageSettlement";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import ManageRequest from "./components/pages/Hospitals/ManageRequest";
import DoctorRequest from "./components/pages/Doctors/DoctorRequest";
import EditDoctor from "./components/pages/Doctors/EditDoctor";
import Appointment from "./components/pages/Appointment/Appointment";
import DoctorManage from "./components/pages/Doctors/DoctorManage";
import StaffManage from "./components/pages/Staff/StaffManage";
import HospitalServices from "./components/pages/Hospitals/HospitalServices";

//Accounts
const Approuter = () => {
  // eslint-disable-next-line no-unused-vars
  // const config = "/react/template"
  
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lockscreen" element={<LockScreen />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/error" element={<Error />} />
          <Route path="/server-error" element={<ServerError />} />
          <Route path="/blankpage" element={<BlankPage />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/settingssociallink" element={<Settingssociallinks />} />
          <Route
            path="/settingschangepassword"
            element={<SettingsChangePassword />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctor-manage" element={<DoctorManage />} />
          <Route path="/staff-manage" element={<StaffManage />} />
          <Route path="/hospital-services" element={<HospitalServices />} />
          
          <Route
            path="/dashboard/fasttag-revenue"
            element={<FasttagRevenue />}
          />
          <Route path="dashboard/fasttag-issued" element={<FasttagIssued />} />
          <Route
            path="/dashboard/settlement-requests"
            element={<SettlementRequests />}
          />
          <Route
            path="/dashboard/settlement-requests/:id"
            element={<ManageSettlement />}
          />
          {/* <Route
            path="/dashboard/fasttag-issued/:id"
            element={<FasttagDetails />}
          /> */}
          <Route path="/doctorlist" element={<DoctorList />} />
          {/* Manage Hospital */}
          <Route path="/manage-hospitals" element={<Hospitals />} />

          <Route
            path="/manage-hospitals/add-hospital"
            element={<AddHospital />}
          />
          <Route path="/manage-hospitals/:id" element={<HospitalDetails />} />
          <Route
            path="/manage-hospitals/manage-request/:id"
            element={<ManageRequest />}
          />
          <Route
            path="/manage-hospitals/manage-request/:id/edit"
            element={<EditHospital />}
          />
          <Route path="/manage-hospitals/:id/edit" element={<EditHospital />} />
          {/* Manage Doctors */}
          <Route path="/manage-doctors" element={<Doctors />} />
          <Route path="/manage-doctors/:id" element={<DoctorDetails />} />
          <Route path="/manage-doctors/add-doctors" element={<AddDoctors />} />
          <Route path="/manage-doctors/edit-doctor/:id" element={<AddDoctors />} />
          <Route path="manage-doctors/request/:id/edit" element={<EditDoctor />} />
          

          <Route path="/manage-doctors/request/:id" element={<DoctorRequest />} />
          <Route
            path="/manage-doctors/specialization"
            element={<Specialization />}
          />
        </Routes>
      </BrowserRouter>
      <div className="sidebar-overlay"></div>
    </>
  );
};

export default Approuter;
