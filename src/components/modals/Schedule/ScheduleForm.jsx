import ModalTabs from "../../tabs/ModalTabs";
import { useForm, useWatch } from "react-hook-form";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useDoctorsList } from "../../../hooks/doctors/useDoctorsList";
import { useDepartmentList } from "../../../hooks/departments/useDepartmentList";
import Select from "react-select";
import { useGetTimeslots } from "../../../hooks/timeslot/useGetTimeslots";
import { categorizeSlots } from "../../configs/categoriseSlots";
import Timeslot from "./Timeslot";
function ScheduleForm(props) {
  const { requestDetails, handleTime } = props;
  console.log("Request details",requestDetails);
  
  const { hospitalId } = useAuth();
  const methods = useForm();
  const [doctor, setDoctor] = useState(requestDetails.doctorId ?? "");
  const { data: doctorsList, isLoading: doctorLoading } =
    useDoctorsList(hospitalId);
  const query = doctor ? `doctor_id=${doctor}` : "";
  const { data: departmentList, isLoading: departmentLoading } =
    useDepartmentList(hospitalId, query);
  const doctorOptions = doctorsList?.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const departmentOptions = departmentList?.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const [doctorId, setDoctorId] = useState("");
  const { data: timeslots, isLoading: timeslotLoading } = useGetTimeslots(
    doctorId,
    hospitalId,
    requestDetails.appointmentDate
  );
  console.log("Doctor ID: ", timeslotLoading);
  if (!timeslots) <div>Loading</div>;
  const { morning, evening, afternoon } = categorizeSlots(timeslots || []);
  const handelTimeslot = (slot) => {
    handleTime(slot);
  };
  const tabData = [
    {
      id: "schedule_morning",
      title: "Morning",
      content: (
        <Timeslot slots={morning || []} handelTimeslot={handelTimeslot} />
      ),
      link: "morning",
      mainTab: "requested",
    },
    {
      id: "schedule_afternoon",
      title: "Afternoon",
      content: (
        <Timeslot slots={afternoon || []} handelTimeslot={handelTimeslot} />
      ),
      link: "afternoon",
      mainTab: "requested",
    },
    {
      id: "schedule_evening",
      title: "Evening",
      content: (
        <Timeslot slots={evening || []} handelTimeslot={handelTimeslot} />
      ),
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

  // const onAssignAppointment = () => {
  //   console.log("logic");
  // };

  return (
    // <FormProvider {...methods}>
    //   <form
    //     className="schedule-form"
    //     onSubmit={methods.handleSubmit(onAssignAppointment)}
    //   >
    //     <div className="row mt-2">
    //       <div className="col-md-6">
    //         <div className="form-group">
    //           <SelectField
    //             options={doctorOptions}
    //             label="Assign doctor"
    //             name="doctor"
    //             isMultiSelect={false}
    //             placeholder=""
    //             isLoading={doctorLoading}
    //           />
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="form-group">
    //           <SelectField
    //             options={department}
    //             label="Department"
    //             name="department"
    //             isMultiSelect={false}
    //             placeholder="Select department"
    //             // validationMessage="Specialisations are required"
    //             // isLoading={specialisationLoading}
    //             isLoading={isLoading}
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <h4 className="card-title mt-2">Time Slot Available</h4>
    //     <ModalTabs tabData={tabData} />
    //   </form>
    // </FormProvider>
    <form
      className="schedule-form"
      // onSubmit={methods.handleSubmit(onAssignAppointment)}
    >
      <div className="row mt-2">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Doctor</label>
            <Select
              options={doctorOptions}
              label="Assign doctor"
              name="doctor"
              isMultiSelect={false}
              placeholder=""
              isLoading={doctorLoading}
              onChange={(selectedOption) => {
                setDoctorId(selectedOption.value ?? "");
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Department</label>
            <Select
              options={departmentOptions}
              label="Department"
              name="department"
              isMultiSelect={false}
              placeholder="Select department"
              // validationMessage="Specialisations are required"
              // isLoading={departmentLoading}
              isLoading={departmentLoading}
            />
          </div>
        </div>
      </div>

      <h4 className="card-title mt-2">Time Slot Available</h4>
      <ModalTabs tabData={tabData} />
    </form>
  );
}

ScheduleForm.propTypes = {
  requestDetails: PropTypes.node,
  handleTime: PropTypes.func.isRequired,
};

export default ScheduleForm;
