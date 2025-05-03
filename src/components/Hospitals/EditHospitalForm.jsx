import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ChooseFile from "./ChooseFile";
import UploadFiles from "./UploadFiles";
import InputField from "../Inputfields/InputField";
import FasttagToggle from "../FasttagRevenue/FasttagToggle";
import TextArea from "../Inputfields/TextArea";
import { useAuth } from "../../hooks/useAuth";
import { useViewHospital } from "../../hooks/hospital/useViewHospital";
import { useNavigate } from "react-router-dom";
import { useEditHostpital } from "../../hooks/hospital/useEditHospitals";
import FullscreenLoader from "../loaders/FullscreenLoader";

function EditHospitalForm() {
  const methods = useForm();
  const navigate = useNavigate();
  const { hospitalId } = useAuth();
  const { data: hospitalDetails } = useViewHospital(hospitalId);
  const [toggleFasttag, setToggleFasttag] = useState(
    hospitalDetails?.fasttag?.enabled || false
  );
  const { mutate, isLoading } = useEditHostpital();
  useEffect(() => {
    if(hospitalDetails){
        methods.reset({
          hospitalName: hospitalDetails?.name,
          // set default values for other fields as needed
          adminName: hospitalDetails?.admin_name,
          adminEmail: hospitalDetails?.admin_email,
          adminPassword: hospitalDetails?.admin_password,
          website: hospitalDetails?.website,
          gstnumber: hospitalDetails?.gst,
          companyName: hospitalDetails?.address?.lineOne,
          street: hospitalDetails?.address?.city,
          address: hospitalDetails?.address?.lineTwo,
          town: hospitalDetails?.address?.city,
    
          district: hospitalDetails?.address?.district,
          state: hospitalDetails?.address?.state,
          pincode: hospitalDetails?.address?.pincode,
          accountNumber: hospitalDetails?.bank_account?.account_number,
          verifyAccountnumber: hospitalDetails?.bank_account?.verify_account_number,
          accountHoldername: "",
          ifsc: hospitalDetails?.bank_account?.ifsc,
          billingAccountHoldername: hospitalDetails?.billing_address?.lineOne,
    
          billingStreet: hospitalDetails?.billing_address?.city,
          billingAddress: hospitalDetails?.billing_address?.lineTwo,
          billingTown: hospitalDetails?.billing_address?.city,
          billingDistrict: hospitalDetails?.billing_address?.district,
          companyWebsite: hospitalDetails?.billing_address?.website,
        });
    }
  }, [hospitalDetails, methods]);
  const onEditHospital = async (data) => {
    const hospital = {
      name: data?.hospitalName,
      logo: "hihihi",
      location: data?.town,
      address: {
        lineOne: data?.companyName,
        lineTwo: data?.address + " " + data?.street,
        city: data?.town,
        district: data?.district,
        state: data?.state,
        pincode: data?.pincode,
      },
      billing_address: {
        lineOne: data?.billingAccountHoldername,
        lineTwo: data?.billingAddress + " " + data?.billingStreet,
        city: data?.billingTown,
        district: data?.billingDistrict,
        state: data?.billingState,
        pincode: data?.billingPincode,
      },
      admin: {
        name: data?.adminName,
        email: data?.adminEmail,
        password: data?.adminPassword,
      },
      fastTag: {
        enabled: toggleFasttag,
        count: 0,
        price: 0,
      },
    gst: data?.gstnumber, 
    website: data?.website,
    };
    await mutate({ id: hospitalId, data: hospital });
  };
  return (
    <FormProvider {...methods}>
      <form
        className="bg-white rounded p-4 mt-3"
        onSubmit={methods.handleSubmit(onEditHospital)}
      >
        <div className="row mt-4">
          <div className="col-md-8 ms-md-3">
            <ChooseFile />
          </div>
        </div>
        <div className="w-100 mt-4 mt-md-2">
          <div className="form-group">
            <InputField
              name="hospitalName"
              label="Hospital Name"
              validation={{ required: "Hospital Name is required" }}
              placeholder=""
              type="text"
              defaultValue={hospitalDetails?.name} // {hospitalDetails?.name}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="adminName"
                label="Admin Name"
                validation={{ required: "Admin Name is required" }}
                placeholder=""
                type="text"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="adminEmail"
                label="Admin Email ID"
                validation={{ required: "Admin Email is required" }}
                placeholder=""
                type="email"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="adminPassword"
                label="Password"
                validation={{ required: "Password is required" }}
                placeholder=""
                type="password"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="website"
                label="Website"
                validation={{ required: "Website is required" }}
                placeholder="Website"
                type="text"
                defaultValue={hospitalDetails?.website}
              />
            </div>
          </div>
        </div>
        <h4 className="card-title">GSTIN</h4>
        <div className="w-50">
          <InputField
            name="gstnumber"
            label="GST Number"
            validation={{ required: "GST Number is required" }}
            placeholder="GST Number"
            type="text"
            defaultValue={hospitalDetails?.gst}
          />
        </div>

        <h4 className="card-title mt-4">Fast Tag</h4>
        <div className="d-flex">
          <label className="">Enable Fast Tag</label>
          <div className="ms-2">
            <FasttagToggle
              setToggleFasttag={setToggleFasttag}
              toggleFasttag={toggleFasttag}
            />
          </div>
        </div>

        {/* <div className="row mt-4">
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
        </div> */}

        <h4 className="card-title mt-3">Company Location</h4>
        <div className="row">
          <div className="col-md-4">
            <InputField
              name="companyName"
              label=""
              validation={{ required: "Company Location is required" }}
              placeholder="Company Name"
              type="text"
              defaultValue={hospitalDetails?.address.lineOne}
            />
          </div>

          <div className="col-md-8">
            <InputField
              name="street"
              label=""
              validation={{ required: "Street is required" }}
              placeholder="Area / Street / Sector"
              type="text"
              defaultValue={hospitalDetails?.address.city}
            />
          </div>
        </div>

        <div className="form-group">
          <TextArea
            name="address"
            label=""
            validation={{ required: "Address is required" }}
            placeholder="Enter Address"
            defaultValue={hospitalDetails?.address.lineTwo}
          />
        </div>

        <div className="row">
          <div className="col-md-7">
            <div className="form-group">
              <InputField
                name="town"
                label=""
                validation={{ required: "Town is required" }}
                placeholder="Town"
                type="text"
                defaultValue={hospitalDetails?.address.city}
              />
            </div>
          </div>

          <div className="col-md-5">
            <div className="form-group">
              <InputField
                name="district"
                label=""
                validation={{ required: "District is required" }}
                placeholder="District"
                type="text"
                defaultValue={hospitalDetails?.address.district}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7">
            <div className="form-group">
              <InputField
                name="state"
                label=""
                validation={{ required: "State is required" }}
                placeholder="State"
                type="text"
                defaultValue={hospitalDetails?.address.state}
              />
            </div>
          </div>

          <div className="col-md-5">
            <div className="form-group">
              <InputField
                name="pincode"
                label=""
                validation={{ required: "Pincode is required" }}
                placeholder="Pincode"
                type="text"
                defaultValue={hospitalDetails?.address.pincode}
              />
            </div>
          </div>
        </div>

        <h4 className="card-title mt-3">Add Bank Account</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="accountNumber"
                label=""
                validation={{ required: "Account Number is required" }}
                placeholder="Account Number"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="verifyAccountnumber"
                label=""
                validation={{ required: "Account Number is required" }}
                placeholder="Verify Account Number"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <InputField
                name="accountHoldername"
                label=""
                validation={{
                  required: "Account Holder Name is required",
                }}
                placeholder="Account Holder Name"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="ifsc"
                label=""
                validation={{ required: "IFSC Code is required" }}
                placeholder="IFSC"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <h4 className="card-title mt-3">Billing Address</h4>
          {/* <Checkbox
                    name="sameascompany"
                    label="Same as Company Address"
                    validation={null}
                    // onChangeHandler={handleChcekbox}
                  /> */}
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="billingAccountHoldername"
                label=""
                validation={{
                  required: "Account Holder Name is required",
                }}
                placeholder="Account Holder Name"
                type="text"
                // disabled={isSameAsCompanyAddress}
                defaultValue={hospitalDetails?.billing_address.lineOne}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <InputField
                name="billingStreet"
                label=""
                validation={{ required: "Street is required" }}
                placeholder="Area / Street / Sector"
                type="text"
                // disabled={isSameAsCompanyAddress}
                //  defaultValue={hospitalDetails?.billing_address.city}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <TextArea
            name="billingAddress"
            label=""
            validation={{ required: "Address is required" }}
            placeholder="Enter Address"
            // disabled={isSameAsCompanyAddress}
            defaultValue={hospitalDetails?.billing_address.lineTwo}
          />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="billingTown"
                label=""
                validation={{ required: "Town is required" }}
                placeholder="Town / City"
                type="text"
                // disabled={isSameAsCompanyAddress}
                defaultValue={hospitalDetails?.billing_address.city}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="billingDistrict"
                label=""
                validation={{ required: "District is required" }}
                placeholder="District"
                type="text"
                defaultValue={hospitalDetails?.billing_address.district}
                // disabled={isSameAsCompanyAddress}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="billingState"
                label=""
                validation={{ required: "State is required" }}
                placeholder="State"
                type="text"
                defaultValue={hospitalDetails?.billing_address.state}
                // disabled={isSameAsCompanyAddress}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="billingPincode"
                label=""
                validation={{ required: "Pincode is required" }}
                placeholder="Pincode"
                type="text"
                defaultValue={hospitalDetails?.billing_address.pincode}
                // disabled={isSameAsCompanyAddress}
              />
            </div>
          </div>
        </div>

        <div className="w-100 mt-3">
          <div className="form-group">
            <InputField
              name="companyWebsite"
              label="Company Website"
              validation={{ required: "Company Website is required" }}
              placeholder="Enter Company Website"
              type="text"
              defaultValue={hospitalDetails?.website}
            />
          </div>
        </div>

        <div className="mt-4">
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
        {isLoading && <FullscreenLoader />}
      </form>
    </FormProvider>
  );
}

export default EditHospitalForm;
