import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { user_profile } from "../imagepath";
import { Link } from "react-router-dom";
import ConfirmDelete from "../modals/ConfirmDelete";
import PropTypes from "prop-types";
import EditDoctor from "../modals/AddDoctor/EditDoctor";
import useDeleteDoctor from "../../hooks/doctors/useDeleteDoctor";
import { useAuth } from "../../hooks/useAuth";
import { useDoctorsList } from "../../hooks/doctors/useDoctorsList";
import CircularImage from "../assests/CircularImage";

function DoctorsTable(props) {
  const { doctorsList, loading } = props;  
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { hospitalId } = useAuth();
  const { data: doctorsData } = useDoctorsList(hospitalId);
  const { mutate, isLoading } = useDeleteDoctor();

  useEffect(() => {
    if (doctorsData) {
      setShow(false);
    }
  }, [doctorsData]);

  const handleEdit = (id) => {
    setShowEdit(true);
    setSelectedDoctor(id);
  };

  const handleDeleteClick = (id) => {
    setSelectedDoctor(id);
    setShow(true);
  };

  const handleDelete = async () => {
    await mutate(selectedDoctor);
  };
  const columns = [
    {
      title: "Doctor Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      render: (item, record) => (
        <div className="d-flex">
          <div>
            <CircularImage
              src={record?.profile_pic ?? user_profile}
              alt={record.name}
              size={40}
              fallback={user_profile}
            />
          </div>
          <div className="ms-2 table-profile">
            <h6>{record.name}</h6>
            <p className="text-muted mb-0">{record.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone_number",
      // sorter: (a, b) => a.empid.length - b.empid.length,
    },

    {
      title: "Joining Date",
      dataIndex: "work_start_date",
      render: (item) => <div>{item ? item : "N/A"}</div>,
      // sorter: (a, b) => a.joiningDate.length - b.joiningDate.length,
    },
    {
      title: "Department",
      dataIndex: "departments",
      // sorter: (a, b) => a.department.length - b.department.length,
      // render: (item) => (
      //   <div className="table-text">
      //     <h6>{item}hs</h6>
      //   </div>
      // ),
      render: (item, record) => {
        // const department = record?.departments[0]
        // console.log("Department ",record?.departments);
        const departmentLen = record?.departments?.length;
        const departments =
          departmentLen !== 0 &&
          record?.departments?.reduce((acc, current) => {
            return acc + current.name + " ";
          }, "");
        return <div>{departments}</div>;
      },
    },
    {
      title: "Pricing",
      dataIndex: "pricing",
      sorter: (a, b) => a.pricing.length - b.pricing.length,
      render: (item) => <div>₹{item}</div>,
    },
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
                {/* <Link
                  className="dropdown-item"
                  to={`${record.id}`}
                  // onClick={()=>setShowEdit(true)}
                >
                  <i className="far fa-eye me-2" />
                  View
                </Link> */}
                <Link
                  className="dropdown-item"
                  to
                  onClick={() => handleEdit(record.id)}
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => handleDeleteClick(record.id)}
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
      <DataTable
        columns={columns}
        dataSource={doctorsList ?? []}
        loading={loading}
      />
      <ConfirmDelete
        setShow={setShow}
        show={show}
        title="Doctor"
        handleDelete={handleDelete}
        isLoading={isLoading}
      />
      <EditDoctor
        setShow={setShowEdit}
        show={showEdit}
        title="Edit Doctor"
        selectedDoctor={selectedDoctor}
      />
    </div>
  );
}

// props validation
DoctorsTable.propTypes = {
  doctorsList: PropTypes.node,
  loading: PropTypes.bool,
};
export default DoctorsTable;
