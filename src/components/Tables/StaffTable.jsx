import React, { useState } from "react";
import ConfirmDelete from "../modals/ConfirmDelete";
import EditStaff from "../modals/AddStaff/EditStaff";
import { user_profile } from "../imagepath";
import DataTable from "./DataTable";
import { useAuth } from "../../hooks/useAuth";
import { useHospitalStaffs } from "../../hooks/users/useHospitalStaffs";
import { Link } from "react-router-dom";
import useDeleteStaff from "../../hooks/staff/useDeleteStaff";

function StaffTable() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const { hospitalId } = useAuth();
  const { data: staffsList, isLoading } = useHospitalStaffs(hospitalId);
  const { mutate } = useDeleteStaff();
  console.log("staffsList", staffsList);
  console.log("isLoading", isLoading);

  const handleEditClick = (id) => {
    setSelectedStaff(id);
    setShowEdit(true);
  };

  const handleDeleteClick = (id) => {
    setSelectedStaff(id);
    setShow(true);
  };
  const handleDelete = async () => {
    console.log("Log click");
    
    await mutate(selectedStaff);
    setShow(false);
  };
  const columns = [
    {
      title: "Staff Name",
      dataIndex: "first_name",
      sorter: (a, b) => a.name.length - b.name.length,
      render: (item, record) => (
        <div className="d-flex">
          <img src={user_profile} width={35} height={35} alt="" />
          <div className="ms-2 table-text">
            <h6>
              {item} {record?.last_name}
            </h6>
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
      // render:(item, record)=>{
      //   const date = record?.created_at;
      //   const dateOnly = new Date(date).toLocaleDateString();
      //   return (
      //     <div>{dateOnly}</div>
      //   )
      // }
      // sorter: (a, b) => a.joiningDate.length - b.joiningDate.length,
    },
    {
      title: "Department",
      dataIndex: "",
      // sorter: (a, b) => a.department.length - b.department.length,
      render: (item, record) => {
        // const department = record?.departments[0]
        // console.log("Department ",record?.departments);
        const departmentLen = record?.departments?.length;
        const departments =
          departmentLen !== 0 &&
          record?.departments?.reduce((acc, current) => {
            console.log("Current ", current);

            return acc + current.name + `${departmentLen !== 0 ? "" : ","} `;
          }, "");
        console.log("departments ", departments);

        return <div>{departments}</div>;
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      // sorter: (a, b) => a.pricing.length - b.pricing.length,
    },
    {
      title: "",
      dataIndex: "",
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
                  onClick={() => handleEditClick(record.id)}
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={()=>handleDeleteClick(record.id)}
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
      <ConfirmDelete
        setShow={setShow}
        show={show}
        title="Staff"
        handleDelete={handleDelete}
      />
      <EditStaff
        setShow={setShowEdit}
        show={showEdit}
        title="Edit Staff"
        selectedStaff={selectedStaff}
      />
    </div>
  );
}

export default StaffTable;
