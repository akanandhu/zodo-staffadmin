import React from "react";
import Table from "./Table";

function DashboardTable() {
  const hospitalData = {
    title: "Recent Hospital Request",
    columns: ["Hospital Info Name", "Contact Info", "Action"],
    rows: [
      {
        name: "KIMS",
        email: "james@gmail.com",
        contact: "9497677914",
        action: "See More",
      },
      {
        name: "KIMS",
        email: "james@gmail.com",
        contact: "9497677914",
        action: "See More",
      },
      {
        name: "KIMS",
        email: "james@gmail.com",
        contact: "9497677914",
        action: "See More",
      },
    ],
  };

  const doctorRequestData = {
    title: "Recent Doctor Request",
    columns: ["Doctor Name", "Date Of Request", "Action"],
    rows: [
      {
        name: "J James",
        email: "james@gmail.com",
        contact: "9497677914",
        action: "See More",
      },
      {
        name: "J James",
        email: "james@gmail.com",
        contact: "9497677914",
        action: "See More",
      },
      {
        name: "J James",
        email: "james@gmail.com",
        contact: "9497677914",
        action: "See More",
      },
    ],
  };
  return (
    <>
      <div className="row">
        <Table data={hospitalData} />
        <Table data={doctorRequestData} />
      </div>
    </>
  );
}

export default DashboardTable;
