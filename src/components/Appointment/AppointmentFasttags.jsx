import React from "react";
import TransparentTabs from "../tabs/TransparentTabs";
import { appointmentRequestTab } from "../configs/appointmentRequestTab";
// import TransparentTabs from '../tabs/TransparentTabs'
// import { appointmentTab } from '../configs/appointmentTab'

function AppointmentFasttags() {
  return (
    <div className="card-box mt-3">
      <TransparentTabs tabData={appointmentRequestTab} />
    </div>
  );
}

export default AppointmentFasttags;
