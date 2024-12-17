import React, { useState } from "react";
import ChooseFile from "../../Hospitals/ChooseFile";
import Select from "react-select";

function CreateStaff() {
  const [selectedOption, setSelectedOption] = useState(null);
  const department = [
    { value: "ent", label: "ENT" },
    { value: "gynaecology", label: "Gynaecology" },
    { value: "pediatry", label: "Pediatry" },
    { value: "cardiology", label: "Cardiology" },
  ];
  return (
    <div className="bg-white rounded ps-1 pe-1">
      <div className="row">
        <div className="col-md-8">
          <ChooseFile />
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <select className="hospital-draft-btn text-primary status-select">
            <option>Active</option>
            <option>In Active</option>
          </select>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-4">
          <div className="form-group">
            <label>Staff Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter doctor name"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Staff Email ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter doctor email"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
            />
          </div>
        </div>
      </div>

      <div className="row">
       
        <div className="col-md-4">
          <div className="form-group">
            <label>Department</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={department}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter user name"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
        </div>
      </div>

      <h4 className="card-title mt-2">Address</h4>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            {/* <label>Address line:</label> */}
            <input type="text" className="form-control" placeholder="Pincode" />
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
            <input type="text" className="form-control" placeholder="State" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStaff;
