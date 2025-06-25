import React, { useEffect, useState } from "react";
import ChooseFile from "../../Hospitals/ChooseFile";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../Inputfields/InputField";
import SelectField from "../../Inputfields/SelectField";
import { useAuth } from "../../../hooks/useAuth";
import { useDepartmentList } from "../../../hooks/departments/useDepartmentList";
import { useSpecialisationList } from "../../../hooks/specialisation/useSpecialisationList";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useDoctorView } from "../../../hooks/doctors/useDoctorView";
import { useEditDoctors } from "../../../hooks/doctors/useEditDoctors";

function EditOverview(props) {
  const { handleClose, selectedDoctor } = props;
  const { data: doctor } = useDoctorView(selectedDoctor);
  console.log("Doctor to edit ", doctor);
  const { hospitalId } = useAuth();
  const methods = useForm();
  const [joiningDate, setJoiningDate] = useState();
  const [fileURL, setFileURL] = useState("");
  const { data: departmentList, isLoading: departmentLoading } =
    useDepartmentList(hospitalId);
  const { data: specialisationList, isLoading: specialisationLoading } =
    useSpecialisationList(hospitalId);
  const { mutate, isLoading } = useEditDoctors();

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

  useEffect(() => {
    if (doctor) {
      console.log("Doctor data in edit overview: ", doctor);

      // const selectedDepartments = doctor?.department.filter((item)=> )
      setFileURL(doctor?.profile_pic);
      const specialisation = doctor?.specialisations;
      const specialisations = specialisation.map((item) => ({
        label: item.name,
        value: item.id,
      }));
      const departmentList = doctor?.departments || [];
      const departments = departmentList.map((item) => ({
        label: item.name,
        value: item.id,
      }));

      console.log("Specialisations: ", specialisations);
      console.log("Departments: ", departments);
      

      methods.reset({
        doctorname: doctor.name,
        doctoremail: doctor.email,
        profile_pic: fileURL,
        // city: "Kochi",
        jobTitle: doctor?.job_title,
        pricing: doctor.pricing,
        specialisations: specialisations,
        phone: doctor?.phone_number,
        registrationNumber: doctor?.registration_details?.registration_number,
        councilName: doctor?.registration_details?.council_name,
        // joiningDate: doctor?.registration_details?.joining_date,
        departments: departments,
      });

      setJoiningDate(doctor?.registration_details?.joining_date);
    }
  }, [doctor, methods]);

  const onCreateDoctor = async (data) => {
    console.log("Data from form: ", data);
    const departments = data?.departments?.map((item) => item.value);
    console.log("Selected departments: ", departments);
    const specialisations = data?.specialisations?.map((item) => item.value);
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
      // city: "",
      pricing: parseInt(data.pricing),
      // job_title:data.jobTitle,
      specifications_id: specialisations,
      phone_number: data.phone,
      hospital_id: hospitalId,
      registration_details: {
        registration_number: data.registrationNumber,
        council_name: data.councilName,
        joining_date: joiningDate,
      },
      department_ids: departments,
    };

    console.log("Doctor to edit: ", doctor);
    console.log(mutate);

    await mutate(
      { id: selectedDoctor, data: doctor },
      {
        onSuccess: () => {
          methods.reset();
          handleClose();
        },
        onError: () => {
          handleClose();
        },
      }
    );
    // methods.reset();
    // handleClose();
  };

  const handleFileURL = (url) => {
    setFileURL(url);
  };
  return (
    <FormProvider {...methods}>
      <form
        className="bg-white rounded p-4"
        onSubmit={methods.handleSubmit(onCreateDoctor)}
      >
        <div className="row">
          <div className="col-md-8 ms-md-3">
            <ChooseFile handleFileURL={handleFileURL} fileURL={fileURL} />
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
          {/* <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="jobTitle"
                label="Job Title"
                validation={{ required: "Job title is required" }}
                placeholder="Enter job title"
                type="text"
              />
            </div>
          </div> */}
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
                placeholder="Enter joining date"
                onChange={(e) => setJoiningDate(e.target.value)}
                value={joiningDate}
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

EditOverview.propTypes = {
  handleClose: PropTypes.func.isRequired,
  selectedDoctor: PropTypes.node,
};

export default EditOverview;
