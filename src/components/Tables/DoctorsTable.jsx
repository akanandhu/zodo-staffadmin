import React, { useState } from "react";
import DataTable from "./DataTable";
import { user_profile } from "../imagepath";
import { Link } from "react-router-dom";
import ConfirmDelete from "../modals/ConfirmDelete";
import AddDoctor from "../modals/AddDoctor/AddDoctor";
import PropTypes from "prop-types";

function DoctorsTable(props) {
  const { doctorsList } = props;  
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const columns = [
    {
      title: "Doctor Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      render: (item, record) => (
        <div className="d-flex">
          <img src={user_profile} width={35} height={35} alt="" />
          <div className="ms-2 table-text">
            <h6>{item}</h6>
            <p>{record.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Employe ID",
      dataIndex: "empid",
      sorter: (a, b) => a.empid.length - b.empid.length,
    },

    {
      title: "Joining Date",
      dataIndex: "joiningDate",
      sorter: (a, b) => a.joiningDate.length - b.joiningDate.length,
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Pricing",
      dataIndex: "pricing",
      sorter: (a, b) => a.pricing.length - b.pricing.length,
    },
    {
      title: "",
      dataIndex: "FIELD8",
      render: () => (
        <>
          <div className="text-end">
            <div className="dropdown dropdown-action">
              <Link
                to="#"
                className="action-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <Link
                  className="dropdown-item"
                  to
                  // onClick={()=>setShowEdit(true)}
                >
                  <i className="far fa-eye me-2" />
                  View
                </Link>
                <Link
                  className="dropdown-item"
                  to
                  onClick={() => setShowEdit(true)}
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setShow(true)}
                >
                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                </Link>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="mt-3">
      <DataTable columns={columns} dataSource={doctorsList ?? []} />
      <ConfirmDelete setShow={setShow} show={show} title="Doctor" />
      <AddDoctor setShow={setShowEdit} show={showEdit} title="Doctor" />
    </div>
  );
}

// props validation
DoctorsTable.propTypes = {
  doctorsList: PropTypes.node,
};
export default DoctorsTable;
