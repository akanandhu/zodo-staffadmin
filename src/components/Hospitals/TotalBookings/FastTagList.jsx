import React from 'react'
import { fastTagList } from '../../configs/fastTagList';

function FastTagList() {
    const columns = [
        {
          title: "DATE ISSUED",
          dataIndex: "date",
          sorter: (a, b) => a.date.length - b.date.length,
        },
        {
          title: "INVOICE#",
          dataIndex: "invoiceNumber",
          sorter: (a, b) => a.invoiceNumber.length - b.invoiceNumber.length,
        },
        {
          title: "TRANSACTION NAME",
          dataIndex: "transactionName",
          sorter: (a, b) => a.transactionName.length - b.transactionName.length,
        },
        {
          title: "DUE DATE",
          dataIndex: "dueDate",
          sorter: (a, b) => a.dueDate.length - b.dueDate.length,
        },
        {
          title: "STATUS",
          dataIndex: "status",
          sorter: (a, b) => a.status.length - b.status.length,
        },
        {
          title: "TOTAL",
          dataIndex: "total",
          sorter: (a, b) => a.total.length - b.total.length,
        },
        {
            title: "BALANCE",
            dataIndex: "balance",
            sorter: (a, b) => a.balance.length - b.balance.length,
          },{
            title: "ACTIONS",
            dataIndex: "actions"
          },
      ];
  return (
    <div>
        <BookingsTable columns={columns} data={fastTagList}/>
    </div>
  )
}

export default FastTagList