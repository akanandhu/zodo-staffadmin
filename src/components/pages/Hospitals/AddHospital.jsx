import React, { useState } from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import ChooseFile from "../../Hospitals/ChooseFile";
import UploadFiles from "../../Hospitals/UploadFiles";
import { useNavigate } from "react-router-dom";
import FasttagToggle from "../../FasttagRevenue/FasttagToggle";
import Select from "react-select";
import Closebtn from "../../assests/Closebtn";


function AddHospital() {
  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: "Add Hospitals",
      status: "active",
      link: "/manage-hospitals/add-hospital",
    },
  ];
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({});
  const [checked, setchecked] = useState(false);
  const handelForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const handleCheck = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setFormDetails({
        ...formDetails,
        billingAccountHoldername: formDetails["companyName"] ?? "",
        billingStreet: formDetails["street"] ?? "",
        billingAddress: formDetails["address"] ?? "",
        billingTown: formDetails["town"] ?? "",
        billingState: formDetails["state"] ?? "",
      });
    } else {
      setFormDetails({
        ...formDetails,
        billingAccountHoldername: "",
        billingStreet: "",
        billingAddress: "",
        billingTown: "",
        billingState: "",
      });
    }
    setchecked(checked);
  };
  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <div className="bg-white rounded p-4 mt-3">
            <div className="row">
              <div className="col">
                <h4>Hospital Onboarding</h4>
              </div>
              <div className="col d-flex justify-content-end">
                <Closebtn/>
              </div>
            </div>

            {/* <div className="row"> */}
            <div className="row mt-4">
              <div className="col-md-8 ms-md-3">
                <ChooseFile />
              </div>
              {/* <div className="col mt-md-0 mt-4">
                <FastTag />
              </div> */}
            </div>
            <div className="w-100 mt-4 mt-md-0">
              <div className="form-group">
                <label>
                  <h4 className="card-title">Hospital Name</h4>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Apollo"
                  name="hospitalName"
                  onChange={handelForm}
                  value={formDetails["hospitalName"]}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Admin Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="adminName"
                    value={formDetails["adminName"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Admin Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="adminEmail"
                    value={formDetails["adminEmail"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Passsword</label>
                  <input
                    type="password"
                    className="form-control"
                    name="adminPassword"
                    value={formDetails["adminPassword"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Website</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Website"
                    name="website"
                    value={formDetails["website"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
            </div>
            <h4 className="card-title">GSTIN</h4>
            <div className="w-50">
              <div className="form-group">
                <label>GST Number</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue=""
                  placeholder="GST Number"
                  name="gstnumber"
                  value={formDetails["gstnumber"]}
                  onChange={handelForm}
                />
              </div>
            </div>

            <h4 className="card-title">Fast Tag</h4>
            <div className="d-flex">
              <label className="">Enable Fast Tag</label>
              <div className="ms-2">
                <FasttagToggle />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Choose Percentage of Profit</label>
                  <Select
                  // defaultValue={selectedOption}
                  // onChange={setSelectedOption}
                  // options={option}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Fast tag Issue Per Day</label>
                  <Select
                  // defaultValue={selectedOption}
                  // onChange={setSelectedOption}
                  // options={option}
                  />
                </div>
              </div>
            </div>

            <h4 className="card-title mt-4">Company Locations</h4>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    name="companyName"
                    value={formDetails["companyName"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Area / Street / Sector"
                    name="street"
                    value={formDetails["street"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              {/* <label>Your message:</label> */}
              <textarea
                rows={5}
                cols={5}
                className="form-control"
                placeholder="Enter Address"
                defaultValue={""}
                name="address"
                value={formDetails["address"]}
                onChange={handelForm}
              />
            </div>

            <div className="row">
              <div className="col-md-7">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Town"
                    name="town"
                    value={formDetails["town"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    name="state"
                    value={formDetails["state"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
            </div>

            <h4 className="card-title">Add Bank Account</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Account Number"
                    name="accountNumber"
                    value={formDetails["accountNumber"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Verify Account Number"
                    name="verifyAccountnumber"
                    value={formDetails["verifyAccountnumber"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Account Holder Name"
                    name="accountHoldername"
                    value={formDetails["accountHoldername"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="IFSC"
                    name="ifsc"
                    value={formDetails["ifsc"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h4 className="card-title">Billing Address</h4>
              <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                {" "}
                Same as Company Address
                <input
                  type="checkbox"
                  name="radio"
                  onChange={handleCheck}
                  checked={checked}
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Account Holder Name"
                    name="billingAccountHoldername"
                    value={formDetails["billingAccountHoldername"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Area / Street / Sector"
                    name="billingStreet"
                    value={formDetails["billingStreet"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              {/* <label>Your message:</label> */}
              <textarea
                rows={5}
                cols={5}
                className="form-control"
                placeholder="Enter Address"
                defaultValue={""}
                name="billingAddress"
                value={formDetails["billingAddress"]}
                onChange={handelForm}
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Town / City"
                    name="billingTown"
                    value={formDetails["billingTown"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    name="billingState"
                    value={formDetails["billingState"]}
                    onChange={handelForm}
                  />
                </div>
              </div>
            </div>

            <div className="w-100">
              <div className="form-group">
                <label>Company Website</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue=""
                  placeholder="Enter Company Website"
                  name="companyWebsite"
                  value={formDetails["companyWebsite"]}
                  onChange={handelForm}
                />
              </div>
            </div>

            <div>
              <div className="edit-hospital">
                <h4>Related Documents</h4>
                <p>upload related documents to complete the process</p>
              </div>
              <div className="row mt-4 pb-5">
                <div className="col-md-4 mt-2">
                  <UploadFiles />
                </div>
                <div className="col-md-4 mt-2">
                  <UploadFiles />
                </div>
                <div className="col-md-4 mt-2">
                  <UploadFiles />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="settings-btns col-md-6 col-sm-12">
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
                &nbsp;&nbsp;
              </div>

              <div className="settings-btns col-md-6 col-sm-12 mt-md-0 mt-2">
                <div className="d-flex justify-content-md-end justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-secondary btn-main-secondary"
                  >
                    Cancel
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="submit"
                    className="border-0 btn-primary btn-main-primary text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddHospital;
