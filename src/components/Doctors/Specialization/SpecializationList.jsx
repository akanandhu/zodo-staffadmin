import { Table } from "antd";
import React, { useState } from "react";
import { specialisationList } from "../../configs/specialisationList";
import { itemRender, onShowSizeChange } from "../../Pagination";
function SpecializationList() {
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
      title: "SPECIALISATION NAME",
      dataIndex: "specialisationName",
      sorter: (a, b) =>
        a.specialisationName.length - b.specialisationName.length,
    },
    {
      title: "CREATED DATE",
      dataIndex: "createdDate",
      sorter: (a, b) => a.createdDate.length - b.createdDate.length,
    },
    {
      title: "LAST UPDATED",
      dataIndex: "lastUpdated",
      sorter: (a, b) => a.lastUpdated.length - b.lastUpdated.length,
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
    },
  ];
  return (
    <div>
      <Table
        pagination={{
          total: specialisationList.length,
          showSizeChanger: true,
          // showTotal: (total, range) =>
          //   `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          onShowSizeChange: onShowSizeChange,
          itemRender: itemRender,
        }}
        columns={columns}
        dataSource={specialisationList}
        rowSelection={rowSelection}
        rowKey={(record) => record.id}
      />
    </div>
  );
}

export default SpecializationList;
