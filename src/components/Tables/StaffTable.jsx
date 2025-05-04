import React, { useState } from "react";
import ConfirmDelete from "../modals/ConfirmDelete";
import { Link } from "react-router-dom";
import EditStaff from "../modals/AddStaff/EditStaff";
import { user_profile } from "../imagepath";
import DataTable from "./DataTable";
import { useAuth } from "../../hooks/useAuth";
import { useHospitalStaffs } from "../../hooks/users/useHospitalStaffs";

function StaffTable() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedStaff,setSelectedStaff] = useState(null);
  const { user } = useAuth();
  const hospitalId = user?.hospital_id;
  const { data: staffsList, isLoading } = useHospitalStaffs(hospitalId);
  console.log("staffsList", staffsList);
  console.log("isLoading", isLoading);
  const handleEditClick = (id)=>{
    setSelectedStaff(id);
    setShowEdit(true)
  }
  const columns = [
    {
      title: "Staff Name",
      dataIndex: "first_name",
      sorter: (a, b) => a.name.length - b.name.length,
      render: (item, record) => (
        <div className="d-flex">
          <img src={user_profile} width={35} height={35} alt="" />
          <div className="ms-2 table-text">
            <h6>{item}{" "}{record?.last_name}</h6>
            <p>{record.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      // sorter: (a, b) => a.empid.length - b.empid.length,
    },

    {
      title: "Joining Date",
      dataIndex: "created_at",
      render:(item, record)=>{
        const date = record?.created_at;
        const dateOnly = new Date(date).toLocaleDateString();
        return (
          <div>{dateOnly}</div>
        )
      }
      // sorter: (a, b) => a.joiningDate.length - b.joiningDate.length,
    },
    {
      title: "Department",
      dataIndex: "departments",
      // sorter: (a, b) => a.department.length - b.department.length,
    },
    // {
    //   title: "Role",
    //   dataIndex: "role",
    //   sorter: (a, b) => a.pricing.length - b.pricing.length,
    // },
    {
      title: "",
      dataIndex: "FIELD8",
      render: (item, record) => (
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
                  to={`/staff-manage/${record.id}`}
                >
                  <i className="far fa-eye me-2" />
                  View
                </Link>
                <Link
                  className="dropdown-item"
                  to
                  onClick={()=>handleEditClick(record.id)}
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
      <DataTable columns={columns} dataSource={staffsList ? staffsList : []} />
      <ConfirmDelete setShow={setShow} show={show} title="Staff" />
      <EditStaff setShow={setShowEdit} show={showEdit} title="Edit Staff" selectedStaff={selectedStaff}/>
    </div>
  );
}

export default StaffTable;
