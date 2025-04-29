import React from "react";
import ChooseFile from "../Hospitals/ChooseFile";
import DoctorTimeslot from "../modals/AddDoctor/DoctorTimeslot";
import InputField from "../Inputfields/InputField";
import SelectField from "../Inputfields/SelectField";
import { useAuth } from "../../hooks/useAuth";
import { FormProvider, useForm } from "react-hook-form";
import { useAddDoctors } from "../../hooks/doctors/useAddDoctors";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDepartmentList } from "../../hooks/departments/useDepartmentList";
import { useSpecialisationList } from "../../hooks/specialisation/useSpecialisationList";

function CreateDoctorForm(props) {
  const { user } = useAuth();
  const { handleClose } = props;
  const hospital_id = user?.hospital_id;
  const methods = useForm();
  const { data: departmentList, isLoading: departmentLoading } =
    useDepartmentList(hospital_id);
  const { data: specialisationList, isLoading: specialisationLoading } =
    useSpecialisationList(hospital_id);
  const { mutate, isLoading } = useAddDoctors(hospital_id);

  const jobtitle = [
    { value: "doctor", label: "Doctor" },
    { value: "staff", label: "Staff" },
  ];

  const specialisationOptions = Array.isArray(specialisationList) ? specialisationList?.map((item) => ({
    value: item.id,
    label: item.name,
  })): [];

  const departmentOptions = departmentList?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const onCreateDoctor = async (data) => {
    const doctor = {
      first_name: data.doctorname,
      last_name: "",
      email: data.doctoremail,
      phone: data.phone,
      hospital_id: hospital_id,
      department_id: data.departments.map((item) => item.value),
      specifications_id: [''],
      pricing: data.pricing,
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
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone number"
              />

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
                // validationMessage="Specialisations are required"
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

        <DoctorTimeslot />
        <h4 className="card-title mt-4">Registration Details {"(Optional)"}</h4>
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
      </form>
    </FormProvider>
  );
}

CreateDoctorForm.propTypes = {
  handleClose: PropTypes.func,
};

export default CreateDoctorForm;
