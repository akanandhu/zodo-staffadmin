import React from "react";
import ChooseFile from "../../Hospitals/ChooseFile";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../Inputfields/InputField";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import SelectField from "../../Inputfields/SelectField";
import TextArea from "../../Inputfields/TextArea";

function CreateStaff(props) {
  const { handleClose } = props;
  const methods = useForm();
  const onCreateStaff = (data) => {
    console.log("Form Data: ", data);
    // Add your form submission logic here
  };

  const departmentOptions = [
    { value: "ent", label: "ENT" },
    { value: "gynaecology", label: "Gynaecology" },
    { value: "pediatry", label: "Pediatry" },
    { value: "cardiology", label: "Cardiology" },
  ];

  return (
    <FormProvider {...methods}>
      <form
        className="bg-white rounded ps-1 pe-1"
        onSubmit={methods.handleSubmit(onCreateStaff)}
      >
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
              <InputField
                name="staffname"
                label="Staff Name"
                validation={{ required: "Staff Name is required" }}
                placeholder="Enter staff name"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="staffemail"
                label="Staff Email ID"
                validation={{ required: "Email is required" }}
                placeholder="Enter staff email"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="phone"
                label="Phone Number"
                validation={{ required: "Phone number is required" }}
                placeholder="Enter phone number"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <SelectField
                options={departmentOptions}
                label="Department"
                name="department"
                isMultiSelect={true}
                placeholder="Select Department"
                validationMessage="Department is required"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="username"
                label="User Name"
                validation={{ required: "Username is required" }}
                placeholder="Enter user name"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="password"
                label="Password"
                validation={{ required: "Password is required" }}
                placeholder="Enter password"
                type="password"
              />
            </div>
          </div>
        </div>

        <h4 className="card-title mt-2">Address</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="pincode"
                label=""
                validation={{ required: "Pincode is required" }}
                placeholder="Pincode"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <InputField
                name="street"
                label=""
                validation={{ required: "Area / Street / Sector is required" }}
                placeholder="Area / Street / Sector"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <TextArea
            name="address"
            label=""
            validation={{ required: "Address is required" }}
            placeholder="Enter Address"
          />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="city"
                label=""
                validation={{ required: "Town / City is required" }}
                placeholder="Town / City"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="state"
                label=""
                validation={{ required: "State" }}
                placeholder="State"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between ps-3 pe-3 pb-5 pt-3">
          <Button
            variant="outline-primary"
            onClick={() => handleClose()}
            className="ps-5 pe-5"
          >
            Back
          </Button>
          <Button variant="primary" className="ps-5 pe-5" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

// props validation
CreateStaff.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CreateStaff;
