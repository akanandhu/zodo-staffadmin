import PropTypes from "prop-types";
import React from "react";
import { Button, Modal } from "react-bootstrap";

function ScheduleModal(props) {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal show={show} onHide={handleClose} className="custom-modal">
      <Modal.Header closeButton>
        {/* <Modal.Title>Modal heading</Modal.Title>{" "} */}
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ScheduleModal.propTypes = {
  show: PropTypes.node,
  setShow: PropTypes.node,
};

export default ScheduleModal;
