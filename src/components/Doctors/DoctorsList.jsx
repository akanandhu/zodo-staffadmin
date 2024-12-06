import React, { useState } from "react";
import {
  addicon,
  blogimg10,
  blogimg12,
  blogimg2,
  blogimg4,
  blogimg6,
  blogimg8,
  pdficon,
  pdficon3,
  pdficon4,
  // plusicon,
  // refreshicon,
} from "../imagepath";
import { Link } from "react-router-dom";
import SearchBox from "../searchbox/SearchBox";
import DataTable from "../DataTables/DataTable";
import ConfirmDelete from "../modals/ConfirmDelete";

function DoctorsList() {
  const [show, setShow] = useState(false);

  const datasource = [
    {
      id: 1,
      Img: blogimg2,
      Name: "Andrea Lalema",
      Department: "Otolaryngology",
      Specialization: "Infertility",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 2,
      Img: blogimg4,
      Name: "Dr.Smith Bruklin",
      Department: "Urology",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 3,
      Img: blogimg6,
      Name: "Dr.William Stephin",
      Department: "Radiology",
      Specialization: "Cancer",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 4,
      Img: blogimg12,
      Name: "Bernardo James",
      Department: "Dentist",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 5,
      Img: blogimg10,
      Name: "Cristina Groves",
      Department: "Gynocolgy",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 6,
      Img: blogimg8,
      Name: "Mark Hay Smith",
      Department: "Gynocolgy",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 7,
      Img: blogimg2,
      Name: "Andrea Lalema",
      Department: "Otolaryngology",
      Specialization: "Infertility",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 8,
      Img: blogimg4,
      Name: "Dr.Smith Bruklin",
      Department: "Urology",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link
              to={`/manage-doctors/${record.id}`}
              className="avatar avatar-sm me-2"
            >
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to={`/manage-doctors/${record.id}`}>{record.Name}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Department",
      dataIndex: "Department",
      sorter: (a, b) => a.Department.length - b.Department.length,
    },
    {
      title: "Specialization",
      dataIndex: "Specialization",
      sorter: (a, b) => a.Specialization.length - b.Specialization.length,
    },
    {
      title: "Degree",
      dataIndex: "Degree",
      sorter: (a, b) => a.Degree.length - b.Degree.length,
    },
    {
      title: "Mobile",
      dataIndex: "Mobile",
      sorter: (a, b) => a.Mobile.length - b.Mobile.length,
      render: (text, record) => (
        <>
          <Link to="#">{record.Mobile}</Link>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },
    {
      title: "JoiningDate",
      dataIndex: "JoiningDate",
      sorter: (a, b) => a.JoiningDate.length - b.JoiningDate.length,
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
                <Link
                  className="dropdown-item"
                  to={`/manage-doctors/edit-doctor/${record.id}`}
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link className="dropdown-item" to="#" onClick={()=> setShow(true)}>
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
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-table show-entire">
          <div className="card-body">
            {/* Table Header */}
            <div className="page-table-header mb-2">
              <div className="row align-items-center">
                <div className="col-12  col-md-1">
                  <div className="doctor-table-blk">
                    <h3>Doctors List</h3>
                  </div>
                </div>
                <div className="col-12 col-md-3 ms-md-4">
                  <div className="doctor-list-search">
                    <div className="search-container">
                      <SearchBox />
                    </div>
                  </div>
                </div>

                <div className="col-md col-sm-12">
                  <div className="invoices-create-btn d-flex justify-content-md-end">
                    <Link
                      to="/manage-doctors/specialization"
                      // data-bs-toggle="modal"
                      // data-bs-target="#delete_invoices_details"
                      className="hospital-draft-btn rounded-pill text-primary ps-4 pe-4 pt-2 pb-2 me-3"
                    >
                      Manage Specialisation
                    </Link>
                    <Link
                      to="/manage-doctors/add-doctors"
                      // data-bs-toggle="modal"
                      // data-bs-target="#save_invocies_details"
                      // className="hospital-add-btn rounded-pill ms-1"
                      className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2"
                    >
                      <img src={addicon} alt="add" />
                      <span className="ms-2 me-2">Add Doctor</span>
                    </Link>
                  </div>
                </div>
                <div className="col-md-auto text-end float-md-end ms-auto download-grp mt-3 mt-md-0">
                  <Link to="#" className=" me-2">
                    <img src={pdficon} alt="#" />
                  </Link>
                  <Link to="#" className=" me-2"></Link>
                  <Link to="#" className=" me-2">
                    <img src={pdficon3} alt="#" />
                  </Link>
                  <Link to="#">
                    <img src={pdficon4} alt="#" />
                  </Link>
                </div>
              </div>
            </div>
            {/* /Table Header */}
            <div className="doctor-list">
              <DataTable data={datasource} columns={columns} />
            </div>
          </div>
        </div>
      </div>
      <ConfirmDelete show={show} setShow={setShow} title="Doctor" />
    </div>
  );
}

export default DoctorsList;
