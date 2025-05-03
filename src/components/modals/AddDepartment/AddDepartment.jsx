import React from "react";
import { Modal } from "react-bootstrap";
import DepartmentForm from "./DepartmentForm";
import PropTypes from "prop-types";

function AddDepartment(props) {
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
          <Modal.Title>Add Department</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <DepartmentForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

// props validation
AddDepartment.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default AddDepartment;
