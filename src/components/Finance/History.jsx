// import AppointmentTable from "../Appointment/AppointmentTable";
import { DatePicker } from "antd";
import DataTable from "../Tables/DataTable";
import SearchBox from "../searchbox/SearchBox";
import ExportTable from "../assests/ExportTable";
import { useAuth } from "../../hooks/useAuth";
import { useSettlementList } from "../../hooks/settlements/useSettlementList";
import { formatDate } from "../configs/formatDate";
function History() {
  const { hospitalId } = useAuth();
  const { data: settlements } = useSettlementList(hospitalId);
  const columns = [
    {
      title: "Transaction Id",
      dataIndex: "bookingid",
      // sorter: (a, b) => a.bookingid.length - b.bookingid.length,
    },
    {
      title: "Name",
      dataIndex: "transactionName",
      sorter: (a, b) => a.patientname.length - b.patientname.length,
    },
    {
      title: "Payment mode",
      dataIndex: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      // sorter: (a, b) => a.type.length - b.type.length,
      render:(item)=> <div>₹ {item}</div>
    },
    {
      title: "Time",
      dataIndex: "updated_at",
      sorter: (a, b) => a.time.length - b.time.length,
      render:(item)=> <div>{formatDate(item)}</div>
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
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
      title: "Action",
      dataIndex: "action",
      // sorter: (a, b) => a.department.length - b.department.length,
    }
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
