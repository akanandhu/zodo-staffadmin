import React from "react";
import TransparentTabs from "../tabs/TransparentTabs";
import { appointmentDataTab } from "../configs/appointmentTab";

function Appointments() {
  return (
    <div className="card-box mt-3">
      <TransparentTabs tabData={appointmentDataTab}/>
    </div>
  );
}

export default Appointments;
