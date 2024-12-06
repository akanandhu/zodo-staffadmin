import React from "react";
import OverViewCard from "./OverViewCard";

function Overview() {
  const revenueOverview = [
    {
      id: 1,
      amount: "$ 20,000",
      status: "No Dues",
      operation: "Settlement",
    },
    {
      id: 2,
      amount: "$ 20,000",
      status: "No Dues",
      operation: "Total C",
    },
    {
      id: 3,
      amount: "$ 2000",
      status: "No Dues",
      operation: "Total Balance",
    },
  ];

  const tagDetails = [
    {
      id: 1,
      amount: "10",
      status: "",
      operation: "Total Fast Tag Issued",
    },
    {
      id: 2,
      amount: "$ 20,000",
      status: "No Dues",
      operation: "Fast Tag Revenue",
    },
  ];
  return (
    <div className="row pt-2">
      {revenueOverview.map((item) => (
        <OverViewCard
          varient="col-md-4 col-sm-6 col-lg-4 col-xl-4"
          data={item}
          key={item.id}
        />
      ))}

      {tagDetails.map((item) => (
        <OverViewCard
          varient="col-md-6 col-sm-6 col-lg-6 col-xl-6 overview-card"
          data={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Overview;
