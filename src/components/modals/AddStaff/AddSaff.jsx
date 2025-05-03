import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import CreateStaff from "./CreateStaff";

function AddSaff(props) {
  const { show, setShow, title } = props;
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="doctor-custom-modal"
      style={{ maxWidth: "none" }}
      backdropClassName="hospital-modal-backdrop"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0 pb-0 overflow-y-auto">
        <CreateStaff handleClose={handleClose} userType="staff"/>
      </Modal.Body>
    </Modal>
  );
}

AddSaff.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
  title: PropTypes.node,
};

export default AddSaff;
