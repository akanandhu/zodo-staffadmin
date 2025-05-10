// import AppointmentTable from "../Appointment/AppointmentTable";
import DataTable from "../Tables/DataTable";
import { useAuth } from "../../hooks/useAuth";
import { useSettlementList } from "../../hooks/settlements/useSettlementList";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import DateSearchHero from "../heros/DateSearchHero";
import { useState } from "react";
import { formatDate } from "../configs/formatDate";
function History() {
  const { hospitalId } = useAuth();
  const [searchTerm, setsearchTerm] = useState("");
  const [date, setdate] = useState(null);
  const query =
    searchTerm || date ? `name=${searchTerm}&updated_at=${date}` : "";
  const { data: settlements, isLoading } = useSettlementList(hospitalId, query);

  const handleDate = (date) => {
    // const utcDate = new Date(date).toISOString();
    console.log("Date ",date);
    
    // console.log("ISO ", utcDate);
    setdate(date);
  };
  const handleSearchTerm = (search) => {
    setsearchTerm(search);
  };
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "bookingid",
      // sorter: (a, b) => a.bookingid.length - b.bookingid.length,
    },
    {
      title: "Name",
      dataIndex: "transactionName",
      // sorter: (a, b) => a.patientname.length - b.patientname.length,
    },
    {
      title: "Payment mode",
      dataIndex: "type",
      // sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      // sorter: (a, b) => a.type.length - b.type.length,
      // render: (item) => <div>₹ {item}</div>,
    },
    {
      title: "Time",
      dataIndex: "updated_at",
      sorter: (a, b) => a.time.length - b.time.length,
      render: (item) => <div>{formatDate(item)}</div>,
    },
    {
      title: "Status",
      dataIndex: "status",
      // sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => (
        <div
          className={`delete-badge ${
            (item === "cancelled" && "status-red") ||
            (item === "pending" && "status-orange") ||
            (item === "requested" && "status-orange") ||
            (item === "completed" && "status-green")
          }`}
        >
          {item}
        </div>
      ),
    },
    {
      title: <div className="d-flex justify-content-center">Action</div>,
      dataIndex: "action",
      render: () => (
        <div className="d-flex justify-content-center" title="Download">
          <i>
            <FeatherIcon icon="download-cloud" />
          </i>
        </div>
      ),
      // sorter: (a, b) => a.department.length - b.department.length,
    },
  ];
  return (
    <div>
      <div>
        <DateSearchHero
          handleDate={handleDate}
          handleSearch={handleSearchTerm}
        />
        <DataTable
          columns={columns}
          dataSource={settlements ? settlements : []}
          loading={isLoading}
        />
      </div>
      {/* <AppointmentTable appointmentList={appointmentList}/> */}
    </div>
  );
}

export default History;
