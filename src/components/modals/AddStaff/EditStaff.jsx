import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";
import StaffEditForm from "./StaffEditForm";

function EditStaff(props) {
  const { show, setShow, title, selectedStaff } = props;
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
        <StaffEditForm selectedStaff={selectedStaff} handleClose={handleClose}/>
        {/* <div className="d-flex justify-content-between ps-3 pe-3 mt-3 mb-4">
          <Button
            variant="outline-primary"
            onClick={handleClose}
            className="ps-5 pe-5"
          >
            Back
          </Button>
          <Button variant="primary" onClick={handleClose} className="ps-5 pe-5">
            Submit
          </Button>
        </div> */}
      </Modal.Body>
    </Modal>
  );
}

EditStaff.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
  title: PropTypes.node,
  selectedStaff: PropTypes.node,
};

export default EditStaff;
