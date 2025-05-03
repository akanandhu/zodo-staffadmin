import React from "react";
import { Modal } from "react-bootstrap";
import AddServiceForm from "./AddServiceForm";
import PropTypes from "prop-types";

function AddHospitalServices(props) {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdropClassName="hospital-modal-backdrop"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Add Service</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <AddServiceForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

// props validation
AddHospitalServices.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default AddHospitalServices;
