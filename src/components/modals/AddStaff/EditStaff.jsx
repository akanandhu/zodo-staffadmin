import PropTypes from 'prop-types';
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import CreateStaff from './CreateStaff';

function EditStaff(props) {
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
      <Modal.Body className="pt-0 pb-0">
        <CreateStaff />
        <div className="d-flex justify-content-between ps-3 pe-3">
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
        </div>
      </Modal.Body>
    </Modal>
  )
}

EditStaff.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
  title: PropTypes.node,
};

export default EditStaff