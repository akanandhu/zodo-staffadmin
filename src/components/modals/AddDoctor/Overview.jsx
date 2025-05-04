import React, { useState } from "react";
import ChooseFile from "../../Hospitals/ChooseFile";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../Inputfields/InputField";
import SelectField from "../../Inputfields/SelectField";
import { useAuth } from "../../../hooks/useAuth";
import { useDepartmentList } from "../../../hooks/departments/useDepartmentList";
import { useSpecialisationList } from "../../../hooks/specialisation/useSpecialisationList";
import { useAddDoctors } from "../../../hooks/doctors/useAddDoctors";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function Overview(props) {
  const { handleClose } = props;
  const { hospitalId } = useAuth();
  const methods = useForm();
  const [joiningDate, setJoiningDate] = useState();
  const { data: departmentList, isLoading: departmentLoading } =
    useDepartmentList(hospitalId);
  const { data: specialisationList, isLoading: specialisationLoading } =
    useSpecialisationList(hospitalId);
  const { mutate, isLoading } = useAddDoctors(hospitalId);
  const jobtitle = [
    { value: "doctor", label: "Doctor" },
    { value: "staff", label: "Staff" },
  ];

  const specialisationOptions = Array.isArray(specialisationList)
    ? specialisationList?.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    : [];

  const departmentOptions = departmentList?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const onCreateDoctor = async (data) => {
    const doctor = {
      // name: data.doctorname,
      // email: data.doctoremail,
      // phone_number: data.phone,
      // hospitalId: hospitalId,
      // // department_id: data.departments.map((item) => item.value),
      // specifications_id: data?.specialisations?.map((item) => item.value),
      // pricing: parseInt(data.pricing),

      name: data.doctorname,
      email: data.doctoremail,
      profile_pic: "www.link.com",
      city: "Kochi",
      pricing: parseInt(data.pricing),
      specifications_id: data?.specialisations?.map((item) => item.value),
      phone_number: data.phone,
      hospital_id: hospitalId,
      registration_details: {
        registration_number: data.registrationNumber,
        council_name: data.councilName,
        joining_date: joiningDate,
      },
      department_id: data?.departments?.map((item) => item.value),
    };
    await mutate(doctor);
    methods.reset();
    handleClose();
  };
  return (
    <FormProvider {...methods}>
      <form
        className="bg-white rounded p-4"
        onSubmit={methods.handleSubmit(onCreateDoctor)}
      >
        <div className="row">
          <div className="col-md-8 ms-md-3">
            <ChooseFile />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="doctorname"
                label="Doctor Name"
                validation={{ required: "Doctor Name is required" }}
                placeholder="Enter doctor name"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="doctoremail"
                label="Doctor Email ID"
                validation={{ required: "Doctor email is required" }}
                placeholder="Enter doctor email"
                type="email"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="phone"
                label="Phone Number"
                validation={{ required: "Phone number is required" }}
                placeholder="Enter doctor phone number"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="pricing"
                label="Pricing"
                validation={{ required: "Pricing is required" }}
                placeholder="Enter doctor pricing"
                type="number"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <SelectField
                options={jobtitle}
                label="Job Title"
                name="jobtitle"
                isMultiSelect={true}
                placeholder="Select job title"
                validationMessage="Job title is required"
                // isLoading={isLoading}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <SelectField
                options={specialisationOptions}
                label="Specialisations"
                name="specialisations"
                isMultiSelect={true}
                placeholder="Select specialisation"
                validationMessage="Specialisations are required"
                isLoading={specialisationLoading}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <SelectField
                options={departmentOptions}
                label="Departments"
                name="departments"
                isMultiSelect={true}
                placeholder="Select departments"
                validationMessage="Departments are required"
                isLoading={departmentLoading}
              />
            </div>
          </div>
        </div>

        <h4 className="card-title mt-2">Registration Details {"(Optional)"}</h4>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              {/* <label>Registration Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter registration number"
              /> */}

              <InputField
                name="registrationNumber"
                label="Registration Number"
                // validation={{ required: "Registration number is required" }}
                placeholder="Enter registration number"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              {/* <label>Council Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter council name"
              /> */}
              <InputField
                name="councilName"
                label="Council Name"
                // validation={{ required: "Registration number is required" }}
                placeholder="Enter council name"
                type="text"
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
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-between ps-3 pe-3 pb-5">
            <Button
              variant="outline-primary"
              onClick={() => handleClose()}
              className="ps-5 pe-5"
            >
              Back
            </Button>
            <Button variant="primary" type="submit" className="ps-5 pe-5">
              {isLoading && (
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
              )}
              <span className="ps-2">Submit</span>
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

Overview.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Overview;
