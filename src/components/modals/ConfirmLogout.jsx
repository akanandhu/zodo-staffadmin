import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

function ConfirmLogout(props) {
  const { show, setShow, handleLogout} = props;
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
        <Modal.Title>Are you sure you want to out ?</Modal.Title>
      </Modal.Header>

      <Modal.Footer className="border-0">
        <button
          to="#"
          // data-bs-toggle="modal"
          // data-bs-target="#delete_invoices_details"
          className="hospital-draft-btn text-primary modal-btn"
          onClick={() => setShow(false)}
        >
          Cancel
        </button>
        <button
          to="#"
          // data-bs-toggle="modal"
          // data-bs-target="#save_invocies_details"
          className="hospital-add-btn ms-1 text-white modal-btn border-0"
          onClick={() => handleLogout()}
        >
          <span className="ps-2">Yes</span>
        </button>
      </Modal.Footer>
    </Modal>
  );
}

// props validation
ConfirmLogout.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default ConfirmLogout;
