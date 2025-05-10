import { useState } from "react";
import Select from "react-select";
import MorningTimeSlot from "./MorningTimeSlot";
import AfternoonTimeSlot from "./AfternoonTimeSlot";
import EveningTimeSlot from "./EveningTimeSlot";
import ModalTabs from "../../tabs/ModalTabs";

function ScheduleForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const department = [
    { value: "ent", label: "ENT" },
    { value: "gynaecology", label: "Gynaecology" },
    { value: "pediatry", label: "Pediatry" },
    { value: "cardiology", label: "Cardiology" },
  ];
  const tabData = [
    {
      id: "schedule_morning",
      title: "Morning",
      content: <MorningTimeSlot />,
      link: "morning",
      mainTab: "requested",
    },
    {
      id: "schedule_afternoon",
      title: "Afternoon",
      content: <AfternoonTimeSlot />,
      link: "afternoon",
      mainTab: "requested",
    },
    {
      id: "schedule_evening",
      title: "Evening",
      content: <EveningTimeSlot />,
      link: "evening",
      mainTab: "requested",
    },
  ];
  return (
    <div className="schedule-form">
      <div className="row mt-2">
        <div className="col-md-6">
          <div className="form-group">
            <label>Assigned Doctor</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter doctor name"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Department</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={department}
            />
          </div>
        </div>
      </div>

      <h4 className="card-title mt-2">Time Slot Available</h4>
      <ModalTabs tabData={tabData} />
    </div>
  );
}

export default ScheduleForm;
