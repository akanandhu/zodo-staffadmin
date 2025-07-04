import React from "react";
// import { Link } from "react-router-dom";
// import { bookings } from "../configs/bookings";
import DataTable from "../Tables/DataTable";
import { useHospitalAppointments } from "../../hooks/appointments/useHospitalAppointments";
import { useAuth } from "../../hooks/useAuth";

function BookingsTable() {
  const { user } = useAuth();

  const hospitalId = user?.hospital_id;
  const query = "status=started";
  const { data: bookings, isLoading } = useHospitalAppointments(
    hospitalId,
    query
  );
  // console.log(bookings);
  console.log(isLoading);  
  const columns = [
    {
      title: "Booking ID",
      dataIndex: "booking_id",
      // sorter: (a, b) => a.bookingid.length - b.bookingid.length,
    },
    {
      title: "Patient Name",
      dataIndex: "patientname",
      // sorter: (a, b) => a.patientname.length - b.patientname.length,
      render: (item, record) => (
        <div>{record?.user_details?.name || record?.user?.first_name}</div>
      ),
    },
    // {
    //   title: "Type",
    //   dataIndex: "type",
    //   sorter: (a, b) => a.type.length - b.type.length,
    // },
    {
      title: "Time",
      dataIndex: "timeSlot",
      // sorter: (a, b) => a.time.length - b.time.length,
      render: (item) => <div>{item ? item : "N/A"}</div>,
    },
    {
      title: "Status",
      dataIndex: "status",
      // sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => (
        <div
          className={`delete-badge ${
            (item === "cancelled" && "status-red") ||
            (item === "started" && "status-orange") ||
            (item === "completed" && "status-green")
          }`}
        >
          {item}
        </div>
      ),
    },
    // {
    //   title: "Department",
    //   dataIndex: "department",
    //   // sorter: (a, b) => a.department.length - b.department.length,
    // },
    {
      title: "Assigned",
      dataIndex: "assingned",
      render: (item, record) => record?.doctor?.name ? <div>Dr.{record?.doctor?.name}</div> : <div>unasigned</div>,
      // sorter: (a, b) => a.assingned.length - b.assingned.length,
    },
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   render: () => <Link to>View</Link>,
    // },
  ];

  return (
    <div className="card-box">
      <h4>Recent Booking Requests</h4>
      <DataTable columns={columns} dataSource={bookings ?? []} />
    </div>
  );
}

export default BookingsTable;
