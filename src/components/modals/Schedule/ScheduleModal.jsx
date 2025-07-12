import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ScheduleForm from "./ScheduleForm";
import { useAssignAppointments } from "../../../hooks/appointments/useAssignAppointment";

function ScheduleModal(props) {
  const { show, setShow, requestDetails} = props;
  const { mutate } = useAssignAppointments();
  const [timeSlot, setTimeslot] = useState(null);
  const handleClose = () => {
    setShow(false);
  };
  console.log("Request Details in Modal: ", requestDetails);

  const handelAssignment = async () => {
    const data = {
      timeSlot: timeSlot,
    };
    await mutate(
      { id: requestDetails?.bookingId, data: data },
      {
        onSuccess: () => {
          handleClose();
        },
        onError: () => {
          handleClose();
        },
      }
    );
  };

  const handleTime = (time) => {
    setTimeslot(time);
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
              {/* <div className="schedule-profile">
                <CircularImage
                  src={requestDetails?.profilePicture ?? user_profile}
                  alt="user"
                  size={80}
                  fallback={user_profile}
                />
              </div> */}
              <div className="schedule-modal">
                <div className="d-flex">
                  <h5>{requestDetails?.patientname}</h5>
                  {/* <div
                    className={`delete-badge ms-5 ${
                      requestDetails?.isFasttag ? "status-green" : "status-grey"
                    }`}
                  >
                    Fasttag
                  </div> */}
                </div>
                <small>
                  {requestDetails?.age}
                  {" yrs "}
                  {requestDetails?.gender}{" "}
                  <span className="ms-1">{requestDetails?.mobile}</span>
                </small>
              </div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-0 pb-0">
        <ScheduleForm requestDetails={requestDetails} handleTime={handleTime} />
        <div className="d-flex justify-content-end ps-3 pe-3 pb-5 pt-5">
          <Button
            variant="primary"
            onClick={handelAssignment}
            className="ps-5 pe-5"
          >
            Assign Now
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

ScheduleModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  requestDetails: PropTypes.object,
};

export default ScheduleModal;
