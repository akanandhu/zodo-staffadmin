import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DataTable from "../Tables/DataTable";
import { pdficon } from "../imagepath";
import DateSearchHero from "../heros/DateSearchHero";

function AppointmentTable(props) {
  const { appointmentList, loading, handleDate, handleSearch } = props;
  
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
      render: (item, record) => <div>{record?.user_details?.name}</div>,
    },
    {
      title: "Type",
      dataIndex: "type",
      // sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Time",
      dataIndex: "timeSlot",
      // sorter: (a, b) => a.time.length - b.time.length,
      render: (item, record) => <div>{record?.timeSlot ?? "unassigned"}</div>,
    },
    {
      title: "Status",
      dataIndex: "status",
      // sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => (
        <div
          className={`delete-badge ${
            (item === "Cancelled" && "status-red") ||
            (item === "started" && "status-orange") ||
            (item === "completed" && "status-green")
          }`}
        >
          {item}
        </div>
      ),
    },
    {
      title: "Department",
      dataIndex: "department",
      // sorter: (a, b) => a.department.length - b.department.length,
      render: (item, record) => <div>{record?.department}</div>,
    },
    {
      title: "Assigned",
      dataIndex: "assingned",
      // sorter: (a, b) => a.assingned.length - b.assingned.length,
      render: (item, record) => <div>Dr.{record?.doctor?.name}</div>,
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
      <DateSearchHero handleDate={handleDate} handleSearch={handleSearch} />
      <DataTable
        columns={columns}
        dataSource={appointmentList ?? []}
        loading={loading}
      />
    </div>
  );
}

AppointmentTable.propTypes = {
  appointmentList: PropTypes.node,
  loading: PropTypes.bool,
  handleDate: PropTypes.func,
  handleSearch: PropTypes.func,
};

export default AppointmentTable;
