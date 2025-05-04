import PropTypes from "prop-types";
import React from "react";
import { Button } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../Inputfields/InputField";

function RequestForm(props) {
  const { handleClose } = props;
  console.log(handleClose);
  const methods = useForm();

  const onRequestPayment = (data) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <div className="main-balance">
          <p>Main Balance</p>
          <h4>₹ 20,000</h4>
        </div>
        <div className="settlement-card mt-2">
          <div className="settlemet-details">
            <p>Total Earnings</p>
            <h4 className="text-primary">₹ 20,000</h4>
          </div>
          <div className="settlemet-details">
            <p>Last Settlement</p>
            <h4>₹ 20,000</h4>
          </div>
        </div>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onRequestPayment)}>
          <div className="payment-request-form-container mt-2">
            <InputField
              name="requestAmount"
              label="Request For Amount"
              validation={{ required: "Amount is required" }}
              placeholder="Enter amount"
              type="text"
            />
          </div>

          <div className="d-flex justify-content-between ps-3 pe-3 mt-3 mb-4">
            <Button
              variant="outline-primary"
              onClick={() => handleClose()}
              className="ps-5 pe-5"
            >
              Back
            </Button>
            <Button
              variant="primary"
              // onClick={handleClose}
              className="ps-5 pe-5"
              type="submit"
            >
              Request Now
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

// props validation
RequestForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default RequestForm;
