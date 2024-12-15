import PropTypes from "prop-types";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import ScheduleForm from "./ScheduleForm";

function ScheduleModal(props) {
  const { show, setShow, title } = props;
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="custom-modal"
      backdropClassName="hospital-modal-backdrop"
      style={{ maxWidth: "none" }}
    >
      <Modal.Header closeButton className="border-0">
        {/* <Modal.Title>Modal heading</Modal.Title>{" "} */}
        <Modal.Title>
          <div>
            <div className="d-flex justify-content-center ps-5"></div>
            <div className="d-flex align-items-center">
              <div className="schedule-profile"></div>
              <div className="schedule-modal">
                <div className="d-flex">
                  <h5 >{title?.patientname}</h5>
                  <div className="delete-badge status-green ms-5">Fasttag</div>
                </div>
                <small>
                  {title?.age}
                  {" yrs "}
                  {title?.gender} <span className="ms-1">{title?.mobile}</span>
                </small>
              </div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-0 pb-0">
        <ScheduleForm/>
        <div className="d-flex justify-content-between ps-3 pe-3 pb-5 pt-5">
          <Button
            variant="outline-primary"
            onClick={handleClose}
            className="ps-5 pe-5"
          >
            Back
          </Button>
          <Button variant="primary" onClick={handleClose} className="ps-5 pe-5">
            Assign Now
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

ScheduleModal.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
  title: PropTypes.node,
};

export default ScheduleModal;
