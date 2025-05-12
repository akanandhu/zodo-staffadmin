import MorningTimeSlot from "./MorningTimeSlot";
import AfternoonTimeSlot from "./AfternoonTimeSlot";
import EveningTimeSlot from "./EveningTimeSlot";
import ModalTabs from "../../tabs/ModalTabs";
import SelectField from "../../Inputfields/SelectField";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useDoctorsList } from "../../../hooks/doctors/useDoctorsList";
import { useDepartmentList } from "../../../hooks/departments/useDepartmentList";

function ScheduleForm(props) {
  const { requestDetails } = props;
  const { hospitalId } = useAuth();
  const methods = useForm();
  const [doctor, setDoctor] = useState(requestDetails.doctorId ?? "");
  const department = [
    { value: "ent", label: "ENT" },
    { value: "gynaecology", label: "Gynaecology" },
    { value: "pediatry", label: "Pediatry" },
    { value: "cardiology", label: "Cardiology" },
  ];
  const { data: doctorsList, isLoading: doctorLoading } =
    useDoctorsList(hospitalId);
  const query = doctor ? `doctor_id=${doctor}` : "";
  const { data: doctorList, isLoading } = useDepartmentList(hospitalId, query);
  console.log(doctorList);

  const doctorOptions = doctorsList?.map((item) => ({
    label: item.name,
    value: item.id,
  }));

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

  useEffect(() => {
    methods.reset({
      doctor: {
        label: requestDetails.doctorName,
        value: requestDetails.doctorId,
      },
    });
  }, [requestDetails]);
  const control = methods.control;
  const selectedDoctor = useWatch({ control, name: "doctor" });
  useEffect(() => {
    setDoctor(selectedDoctor?.value ?? "");
  }, [selectedDoctor]);

  const onAssignAppointment = () => {
    console.log("logic");
  };

  return (
    <FormProvider {...methods}>
      <form
        className="schedule-form"
        onSubmit={methods.handleSubmit(onAssignAppointment)}
      >
        <div className="row mt-2">
          <div className="col-md-6">
            <div className="form-group">
              <SelectField
                options={doctorOptions}
                label="Assign doctor"
                name="doctor"
                isMultiSelect={false}
                placeholder=""
                isLoading={doctorLoading}
                // validationMessage="Specialisations are required"
                // isLoading={specialisationLoading}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <SelectField
                options={department}
                label="Department"
                name="department"
                isMultiSelect={false}
                placeholder="Select department"
                // validationMessage="Specialisations are required"
                // isLoading={specialisationLoading}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>

        <h4 className="card-title mt-2">Time Slot Available</h4>
        <ModalTabs tabData={tabData} />
      </form>
    </FormProvider>
  );
}

ScheduleForm.propTypes = {
  requestDetails: PropTypes.node,
};

export default ScheduleForm;
