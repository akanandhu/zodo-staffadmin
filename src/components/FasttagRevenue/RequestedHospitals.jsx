import React from "react";
import FasttagTable from "./FasttagTable";
import { kims_logo } from "../imagepath";
import ManageAccess from "./ManageAccess";

function RequestedHospitals() {
  const columns = [
    { label: "Hospital Name", key: "hospitalName" },
    { label: "Requested Fast Tags/day", key: "requestedTagsPerday" },
    { label: "Requested On", key: "requestedOn" },
    { label: "Access", key: "access" },
  ];
  const rows = [
    {
      id: 1,
      hospitalName: "KIMS",
      image: `${kims_logo}`,
      requestedTagsPerday: 30,
      requestedOn: 300,
      access: <ManageAccess/>,
    },
    {
      id: 2,
      hospitalName: "KIMS",
      image: `${kims_logo}`,
      requestedTagsPerday: 30,
      requestedOn: 300,
      access: <ManageAccess/>,
    },
    {
      id: 3,
      hospitalName: "KIMS",
      image: `${kims_logo}`,
      requestedTagsPerday: 30,
      requestedOn: 300,
      access: <ManageAccess/>,
    },
  ];

  return <FasttagTable columns={columns} rows={rows} />;
}

export default RequestedHospitals;
