import { DatePicker, Table } from "antd";
import React, { useState } from "react";
import ExportTable from "../assests/ExportTable";
import SearchBox from "../searchbox/SearchBox";
import PropTypes from "prop-types";
import { itemRender, onShowSizeChange } from "../Pagination";
import { Link } from "react-router-dom";

function AppointmentTable(props) {
  const { appointmentList } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
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
      render: () => <Link to>View</Link>,
    },
  ];
  return (
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

      <div className="table-responsive">
        <Table
          pagination={{
            total: appointmentList.length,
            showSizeChanger: true,
            // showTotal: (total, range) =>
            //   `Showing ${range[0]} to ${range[1]} of ${total} entries`,
            onShowSizeChange: onShowSizeChange,
            itemRender: itemRender,
          }}
          columns={columns}
          dataSource={appointmentList}
          rowSelection={rowSelection}
          rowKey={(record) => record.id}
        />
      </div>
    </div>
  );
}

AppointmentTable.propTypes = {
  appointmentList: PropTypes.node,
};

export default AppointmentTable;
