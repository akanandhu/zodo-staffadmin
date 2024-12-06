import React from "react";
import { cancellationsList } from "../../configs/cancellationsList";
import BookingsTable from "./BookingsTable";

function Cancellation() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "TRANSACTION NAME",
      dataIndex: "transactionName",
      sorter: (a, b) => a.transactionName.length - b.transactionName.length,
    },
    {
      title: "DUE ISSUE",
      dataIndex: "dueIssue",
      sorter: (a, b) => a.dueIssue.length - b.dueIssue.length,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (item) => (
        <div
          className={`${
            (item === "Overdue" && "delete-badge status-red") ||
            (item === "Refunded" && "delete-badge status-orange") ||
            (item === "Paid" && "delete-badge status-green")
          }`}
        >
          {item}
        </div>
      ),
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
    },
  ];
  return (
    <div>
      <BookingsTable columns={columns} data={cancellationsList} />
    </div>
  );
}

export default Cancellation;
