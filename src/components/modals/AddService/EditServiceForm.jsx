import React, { useEffect } from "react";
import ChooseFile from "../../Hospitals/ChooseFile";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../Inputfields/InputField";
import TextArea from "../../Inputfields/TextArea";
import { useAuth } from "../../../hooks/useAuth";
import PropTypes from "prop-types";
import { useViewService } from "../../../hooks/hospital-services/useViewService";
import { useUpdateService } from "../../../hooks/hospital-services/useUpdateService";

function EditServiceForm(props) {
  const { handleClose, selectedService } = props;
  const methods = useForm();
  const { hospitalId } = useAuth();
  //   const { mutate, isLoading } = useCreateService();
  const { data: service } = useViewService(selectedService);
  const { mutate, isLoading } = useUpdateService();
  console.log(service);

  const onUpdateService = async (data) => {
    const service = {
      name: data.serviceName,
      description: data.message,
      hospital_id: hospitalId,
      price: parseInt(data.price),
      strike_through_price: parseInt(data.strikePrice),
    };
    console.log(service);
    await mutate({ id: selectedService, data: service });
    // await mutate(service);
    // methods.reset();
    // handleClose(); // Close the modal after successful submission
  };

  useEffect(() => {
    if (service) {
      methods.reset({
        serviceName: service.name,
        price: service.price,
        strikePrice: service.strike_through_price,
        message: service.description,
      });
    }
  }, [service, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onUpdateService)}>
        <div className="row mt-4">
          <div className="col-md-12 ms-md-2">
            <ChooseFile />
          </div>
        </div>
        <div className="form-group mt-2">
          <div className="col-md-12">
            <InputField
              name="serviceName"
              label="Service Name"
              validation={{ required: "Service Name is required" }}
              placeholder="Enter Service Name"
              type="text"
            />
          </div>
        </div>

        <div className="form-group mt-2 row">
          <div className="col-md-6">
            <InputField
              name="price"
              label="Price"
              validation={{ required: "Price is required" }}
              placeholder="Enter Price"
              type="text"
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="strikePrice"
              label="Strike Price"
              validation={{ required: "Strike Price is required" }}
              placeholder="Enter Strike Price"
              type="text"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <TextArea
              name="message"
              label="Message"
              placeholder="Type message here"
            />
          </div>
        </div>

        <div className="form-group d-flex justify-content-end pt-3">
          <button
            to="#"
            //   data-bs-toggle="modal"
            //   data-bs-target="#delete_invoices_details"
            className="hospital-draft-btn text-primary pt-1 pb-1 ps-3 pe-3 rounded"
            onClick={() => handleClose()}
          >
            Cancel
          </button>
          <button
            to="#"
            //   data-bs-toggle="modal"
            //   data-bs-target="#save_invocies_details"
            className="hospital-add-btn ms-1 text-white border-0 pt-1 pb-1 ps-3 pe-3 rounded"
          >
            {isLoading && (
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
            )}
            <span className="ps-2">Save</span>
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

// validate props
EditServiceForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  selectedService: PropTypes.string.isRequired,
};

export default EditServiceForm;
