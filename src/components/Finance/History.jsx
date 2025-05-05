import React from "react";
// import AppointmentTable from "../Appointment/AppointmentTable";
import { DatePicker } from "antd";
import DataTable from "../Tables/DataTable";
import { Link } from "react-router-dom";
import { pdficon } from "../imagepath";
import SearchBox from "../searchbox/SearchBox";
import ExportTable from "../assests/ExportTable";
import { useAuth } from "../../hooks/useAuth";
import { useSettlementList } from "../../hooks/settlements/useSettlementList";
function History() {
  const { hospitalId } = useAuth();
  const { data: settlements } = useSettlementList(hospitalId);
  const columns = [
    {
      title: "Booking ID",
      dataIndex: "bookingid",
      sorter: (a, b) => a.bookingid.length - b.bookingid.length,
    },
    {
      title: "Patient Name",
      dataIndex: "patientname",
      sorter: (a, b) => a.patientname.length - b.patientname.length,
    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Time",
      dataIndex: "time",
      sorter: (a, b) => a.time.length - b.time.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => (
        <div
          className={`delete-badge ${
            (item === "Cancelled" && "status-red") ||
            (item === "Pending" && "status-orange") ||
            (item === "Completed" && "status-green")
          }`}
        >
          {item}
        </div>
      ),
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Assigned",
      dataIndex: "assingned",
      sorter: (a, b) => a.assingned.length - b.assingned.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => {
        return (
          <div style={{ display: "flex", gap: 8 }}>
            <Link to>View</Link>
            <Link to>
              <img src={pdficon} alt="Pdf Icon" width={17} />
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div>
        <div className="row mt-4">
          <div className="col-12 col-md-6 col-xl-3">
            <SearchBox />
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group local-forms cal-icon">
              <DatePicker
                className="form-control datetimepicker"
                // onChange={onChange}
                suffixIcon={null}
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-3">
            <ExportTable />
          </div>
        </div>
        <DataTable
          columns={columns}
          dataSource={settlements ? settlements : []}
        />
      </div>
      {/* <AppointmentTable appointmentList={appointmentList}/> */}
    </div>
  );
}

export default History;
