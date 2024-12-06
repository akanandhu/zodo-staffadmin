import React from "react";
import FasttagTable from "./FasttagTable";
import { kims_logo} from "../imagepath";
import EditFasttag from "./EditFasttag";
import FasttagToggle from "./FasttagToggle";

function HospitalList() {
  const columns = [
    { label: "Hospital Name", key: "hospitalName" },
    { label: "No. Fast Tags/day", key: "fastTagsPerday" },
    { label: "Monthly Sales", key: "monthlySales" },
    { label: "Revenue/Month", key: "revenuePerMonth" },
    { label: "Fast Tag", key: "fastTag" },
    { label: "Action", key: "action" },
  ];
  const rows = [
    {
      id: 1,
      hospitalName:"KIMS",
      image:`${kims_logo}`,
      fastTagsPerday:30,
      monthlySales:300,
      revenuePerMonth:"$ 20,000",
      fastTag:<FasttagToggle index={1}/>,
      action:<EditFasttag/>,
    },
    {
      id: 2,
      hospitalName:"KIMS",
      image:`${kims_logo}`,
      fastTagsPerday:30,
      monthlySales:300,
      revenuePerMonth:"$ 20,000",
      fastTag:<FasttagToggle index={2}/>,
      action:<EditFasttag/>,
    },
    {
      id: 3,
      hospitalName:"KIMS",
      image:`${kims_logo}`,
      fastTagsPerday:30,
      monthlySales:300,
      revenuePerMonth:"$ 20,000",
      fastTag:<FasttagToggle index={3}/>,
      action:<EditFasttag/>,
    }
  ];
  return <FasttagTable columns={columns} rows={rows}/>;
}

export default HospitalList;
