import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { bookings } from "../configs/bookings";
import { itemRender, onShowSizeChange } from "../Pagination";

function BookingsTable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
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

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="card-box">
      <h5>Recent Booking Requests</h5>
      <div className="table-responsive">
        <Table
          pagination={{
            total: bookings.length,
            showSizeChanger: true,
            // showTotal: (total, range) =>
            //   `Showing ${range[0]} to ${range[1]} of ${total} entries`,
            onShowSizeChange: onShowSizeChange,
            itemRender: itemRender,
          }}
          columns={columns}
          dataSource={bookings}
          rowSelection={rowSelection}
          rowKey={(record) => record.id}
        />
      </div>
    </div>
  );
}

export default BookingsTable;
