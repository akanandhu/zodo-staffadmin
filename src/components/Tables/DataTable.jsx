import React from "react";
import { Table } from "antd";
import { onShowSizeChange, itemRender } from "../Pagination";
import PropTypes from "prop-types";
const DataTable = (props) => {
  const { columns, dataSource } = props;
  return (
    <div className="table-responsive">
      <Table
        pagination={{
          total: dataSource.length,
          showSizeChanger: true,
          onShowSizeChange: onShowSizeChange,
          itemRender: itemRender,
        }}
        columns={columns}
        dataSource={dataSource}
        // rowSelection={rowSelection}
        // rowKey={(record) => record.id}
      />
    </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.node,
  dataSource: PropTypes.node,
};

export default DataTable;
