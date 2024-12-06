import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import ChooseFile from "../../Hospitals/ChooseFile";
import UploadFiles from "../../Hospitals/UploadFiles";
import Closebtn from "../../assests/Closebtn";

function AddDoctors() {
  const { id } = useParams();
  const locations = useLocation();
  const patharray = locations.pathname.split("/");

  const breadCrumpData = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: "Add Doctors",
      status: "active",
      link: "/manage-doctors/add-doctors",
    },
  ];

  const editBreadcrump = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: "Edit",
      status: "inactive",
      link: `/manage-doctors/edit-doctor`,
    },
    {
      name: id,
      status: "inactive",
      link: `/manage-doctors/edit-doctor/${id}`,
    },
  ];
  const navigate = useNavigate();
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb
            data={
              patharray.includes("edit-doctor")
                ? editBreadcrump
                : breadCrumpData
            }
          />
          <div className="bg-white rounded p-4 mt-3">
            <div className="row">
              <div className="col">
                <h4>Doctor Onboarding</h4>
              </div>
              <div className="col d-flex justify-content-end">
                <Closebtn />
              </div>
            </div>

            {/* <div className="row"> */}
            <div className="row mt-4">
              <div className="col-md-8 ms-md-3">
                <ChooseFile />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Doctor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter doctor name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Doctor Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter doctor email"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Specilalisation</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter doctor name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Current City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                  />
                </div>
              </div>
            </div>
            <h4 className="card-title">Registration Details</h4>

            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Registration Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter registration number"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Council Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter council name"
                  />
                </div>
              </div>
            </div>

            <h4 className="card-title">Address Locations</h4>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter street"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter street"
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
                placeholder="Enter"
                defaultValue={""}
              />
            </div>

            <div className="row">
              <div className="col-md-7">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter District"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter State"
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
                  />
                </div>
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
                    className="border-0 btn btn-primary btn-main-primary"
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

export default AddDoctors;
