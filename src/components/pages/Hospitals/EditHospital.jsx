import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import UploadFiles from "../../Hospitals/UploadFiles";
import FastTag from "../../Hospitals/FastTag";
import ChooseFile from "../../Hospitals/ChooseFile";
import { useLocation, useParams } from "react-router-dom";
import Closebtn from "../../assests/Closebtn";
function EditHospital() {
  const { id } = useParams();
  const locations = useLocation();
  const patharray = locations.pathname.split("/");

  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: id,
      status: "inactive",
      link: `/manage-hospitals/${id}`,
    },
    {
      name: "Edit",
      status: "active",
      link: `/manage-hospitals/${id}/edit`,
    },
  ];

  const manageBreadcrump = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: "Hospital Requests",
      status: "inactive",
      link: `/manage-hospitals/manage-request`,
    },
    {
      name: id,
      status: "inactive",
      link: `/manage-hospitals/manage-request/${id}`,
    },
    {
      name: "Edit",
      status: "active",
      link: `/manage-hospitals/manage-request/${id}/edit`,
    },
  ];
  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb
            data={
              patharray.includes("manage-request")
                ? manageBreadcrump
                : breadCrumpData
            }
          />
          <div className="bg-white rounded p-4 mt-3">
            <div className="row">
              <div className="col">
                <h4>Hospital Onboarding</h4>
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
              <div className="col mt-md-0 mt-4">
                <FastTag />
              </div>
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
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Admin Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Admin Email ID</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <h4 className="card-title">GSTIN</h4>
            <div className="w-50">
              <div className="form-group">
                <label>GST Number</label>
                <input type="text" className="form-control" defaultValue="" />
              </div>
            </div>

            <h4 className="card-title">Company Locations</h4>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input type="text" className="form-control" />
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
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input type="text" className="form-control" />
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

            <h4 className="card-title">Billing Address</h4>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  {/* <label>Address line:</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Account Holder Name"
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditHospital;
