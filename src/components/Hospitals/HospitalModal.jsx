import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";

function HospitalModal(props) {
  const { show, setShow } = props;
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdropClassName="hospital-modal-backdrop"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>Are you sure you want to delete the hospital ?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0">
        <div className="form-group">
          <label className="col-form-label col-md-4">Reason For Deleting</label>
          <div className="">
            <textarea
              rows={5}
              cols={5}
              className="form-control modal-input"
              placeholder="Write Here.."
              defaultValue={""}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        {/* <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setShow(false)}>
          Save Changes
        </Button> */}

        <button
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete_invoices_details"
          className="btn hospital-draft-btn text-primary"
          onClick={() => setShow(false)}
        >
          Cancel
        </button>
        <button
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#save_invocies_details"
          className="btn hospital-add-btn ms-1 text-white"
        >
          Yes, Delete
        </button>
      </Modal.Footer>
    </Modal>
  );
}

HospitalModal.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
};

export default HospitalModal;
