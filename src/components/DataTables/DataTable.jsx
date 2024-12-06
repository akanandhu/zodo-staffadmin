import { Table } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { itemRender } from "../Pagination";

function DataTable(props) {
  const { columns, data } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="table-responsive">
      <Table
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          defaultPageSize: 25,
          pageSizeOptions: ["25", "50", "100"],
          position: ["bottomRight"],
          size: "default",
          itemRender: itemRender,
        }}
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        rowKey={(record) => record.id}
      />
    </div>
  );
}

DataTable.propTypes = {
  columns: PropTypes.node,
  data: PropTypes.node,
};

export default DataTable;
