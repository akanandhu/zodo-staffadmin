import { useState } from "react";
import { Link } from "react-router-dom";
import { bin_icon_red, pencil_icon, three_dots_menu } from "../../imagepath";
import PropTypes from "prop-types";
import { apollo_logo } from "../../imagepath";
import ConfirmDelete from "../../modals/ConfirmDelete";
import useDeleteHospitalServices from "../../../hooks/hospital-services/useDeleteHospitalService";
import CenteredModal from "../../modals/CenteredModal";
import EditServiceForm from "../../modals/AddService/EditServiceForm";
function ServiceCard(props) {
  const { servicesData } = props;
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { mutate, isLoading } = useDeleteHospitalServices();
  const handleDelete = async () => {
    const depatmentId = servicesData?.id;
    await mutate(depatmentId);
  };
  const handleCloseEditModal = () => {
    setShowEdit(false);
  };
  console.log(showEdit);

  return (
    <div className="card invoices-grid-card w-100">
      <Link to={`/hospital/services/${servicesData.id}`}>
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <img src={apollo_logo} alt="#" />
            </div>
            <div className="col-2 d-flex justify-content-end">
              <div className="dropdown">
                <Link
                  // className="dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={three_dots_menu} alt="" width={15} height={15} />
                </Link>
                <div className="dropdown-menu">
                  <Link
                    className="dropdown-item"
                    onClick={() => setShowEdit(true)}
                  >
                    <img
                      src={pencil_icon}
                      alt="edit"
                      className="dropdown-menu-icon"
                    />
                    <span>Edit</span>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link
                    className="dropdown-item"
                    to="#"
                    onClick={() => setShow(true)}
                  >
                    <img
                      src={bin_icon_red}
                      alt="delete"
                      className="dropdown-menu-icon"
                    />
                    <span className="text-danger">Delete</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>{servicesData.name}</h5>
              </div>
              <div className="col-auto">
                <h5 className="text-primary">active</h5>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p>TOTAL FAST TAG</p>
              </div>
              <div className="col-auto">
                <h5>0</h5>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p>PRICE</p>
              </div>
              <div className="col-auto">
                <h5>₹ {servicesData?.price}</h5>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p>DISCOUNTED PRICE</p>
              </div>
              <div className="col-auto">
                <h5>₹ {servicesData?.strike_through_price}</h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <ConfirmDelete
        setShow={setShow}
        show={show}
        title="Service"
        handleDelete={handleDelete}
        isLoading={isLoading}
      />

      <CenteredModal
        show={showEdit}
        handleClose={handleCloseEditModal}
        title="Edit Service"
      >
        <EditServiceForm
          handleClose={handleCloseEditModal}
          selectedService={servicesData?.id}
        />
      </CenteredModal>
    </div>
  );
}

ServiceCard.propTypes = {
  servicesData: PropTypes.node,
};

export default ServiceCard;
