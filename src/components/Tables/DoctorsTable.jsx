import React from "react";
import { usersList } from "../configs/usersList";
import DataTable from "./DataTable";

function DoctorsTable() {
  const columns = [
    {
      title: "Doctor Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Employe ID",
      dataIndex: "empid",
      sorter: (a, b) => a.empid.length - b.empid.length,
    },

    {
      title: "Joining Date",
      dataIndex: "joiningDate",
      sorter: (a, b) => a.joiningDate.length - b.joiningDate.length,
    },
    {
      title: "Role",
      dataIndex: "role",
      sorter: (a, b) => a.role.length - b.role.length,
    },
  ];
  return (
    <div className="mt-3">
      <DataTable columns={columns} dataSource={usersList}/>
    </div>
  );
}

export default DoctorsTable;
