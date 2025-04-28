import React, { useState } from "react";
import ChooseFile from "../../Hospitals/ChooseFile";
import Select from "react-select";
import { FormProvider, useForm } from "react-hook-form";

function Overview() {
  const [selectedOption, setSelectedOption] = useState(null);
  const jobtitle = [
    { value: "doctor", label: "Doctor" },
    { value: "staff", label: "Staff" },
  ];

  const specialisations = [
    { value: "ent", label: "ENT" },
    { value: "gynaecology", label: "Gynaecology" },
    { value: "pediatry", label: "Pediatry" },
    { value: "cardiology", label: "Cardiology" },
  ];
  const department = [
    { value: "ent", label: "ENT" },
    { value: "gynaecology", label: "Gynaecology" },
    { value: "pediatry", label: "Pediatry" },
    { value: "cardiology", label: "Cardiology" },
  ];
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form className="bg-white rounded p-4">
        <div className="row">
          <div className="col-md-8 ms-md-3">
            <ChooseFile />
          </div>
        </div>

        <div className="row mt-3">
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

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Pricing</label>
              <input
                type="text"
                className="form-control"
                //   placeholder="Enter city"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>Job Title</label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={jobtitle}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Specialisation</label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={specialisations}
              />
            </div>
          </div>
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

        <h4 className="card-title mt-2">Registration Details {"(Optional)"}</h4>

        <div className="row">
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
          <div className="col-md-6">
            <div className="form-group">
              <label>Joining Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter council name"
              />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default Overview;
