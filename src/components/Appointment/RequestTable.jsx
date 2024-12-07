import React, { useState } from "react";
import { Link } from "react-router-dom";
import { itemRender, onShowSizeChange } from "../Pagination";
import { appointmentRequets } from "../configs/appointmentRequests";
import { Table } from "antd";
import ScheduleModal from "../modals/ScheduleModal";

function RequestTable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [show,setShow] = useState(false);
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
      title: "Patient Name",
      dataIndex: "patientname",
      sorter: (a, b) => a.patientname.length - b.patientname.length,
    },
    {
      title: "Date & Time",
      dataIndex: "time",
      sorter: (a, b) => a.time.length - b.time.length,
    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   sorter: (a, b) => a.status.length - b.status.length,
    //   render: (item) => (
    //     <div
    //       className={`delete-badge ${
    //         (item === "Cancelled" && "status-red") ||
    //         (item === "Pending" && "status-orange") ||
    //         (item === "Completed" && "status-green")
    //       }`}
    //     >
    //       {item}
    //     </div>
    //   ),
    // },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => a.department.length - b.department.length,
    },
    {
      title: "Assigned Dr",
      dataIndex: "assingned",
      sorter: (a, b) => a.assingned.length - b.assingned.length,
    },
    {
      title: "Contact Info",
      dataIndex: "contactinfo",
      sorter: (a, b) => a.contactinfo.length - b.contactinfo.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Link
          to
          className="hospital-add-btn rounded-pill ms-md-1 text-white schedule-btn"
          onClick={()=>setShow(true)}
        >
          Schedule Now
        </Link>
      ),
    },
  ];
  return (
    <div className="card-box mt-3">
      <div className="table-responsive">
        <Table
          pagination={{
            total: appointmentRequets.length,
            showSizeChanger: true,
            // showTotal: (total, range) =>
            //   `Showing ${range[0]} to ${range[1]} of ${total} entries`,
            onShowSizeChange: onShowSizeChange,
            itemRender: itemRender,
          }}
          columns={columns}
          dataSource={appointmentRequets}
          rowSelection={rowSelection}
          rowKey={(record) => record.id}
        />
      </div>

      <ScheduleModal show={show} setShow={setShow} />
    </div>
  );
}

export default RequestTable;
