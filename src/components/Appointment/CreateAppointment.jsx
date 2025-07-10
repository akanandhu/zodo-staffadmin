import {
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import InputField from "../Inputfields/InputField";
import { Button } from "react-bootstrap";
import TextArea from "../Inputfields/TextArea";
import SelectField from "../Inputfields/SelectField";
import PropTypes from "prop-types";
import Select from "react-select";
import { useDoctorsList } from "../../hooks/doctors/useDoctorsList";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useDepartmentList } from "../../hooks/departments/useDepartmentList";
import { useGetTimeslots } from "../../hooks/timeslot/useGetTimeslots";
import Timeslot from "../modals/Schedule/Timeslot";
import ModalTabs from "../tabs/ModalTabs";
import { categorizeSlots } from "../configs/categoriseSlots";
import { useCreateOfflineAppointments } from "../../hooks/appointments/useCreateOfflineAppointment";

function CreateAppointment({ handleClose }) {
  console.log(handleClose);

  const { hospitalId } = useAuth();
  const { mutate: createAppointment, isLoading: appointmentLoading } =
    useCreateOfflineAppointments();
  const methods = useForm();
  // const [doctor, setDoctor] = useState(requestDetails.doctorId ?? "");
  // const department = [
  //   { value: "ent", label: "ENT" },
  //   { value: "gynaecology", label: "Gynaecology" },
  //   { value: "pediatry", label: "Pediatry" },
  //   { value: "cardiology", label: "Cardiology" },
  // ];
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];
  const appointmentType = [
    { value: "fast_tag", label: "Fast Tag" },
    { value: "consultation", label: "Consultation" },
  ];
  const { data: doctorsList, isLoading: doctorLoading } =
    useDoctorsList(hospitalId);
  const { data: departments, isLoading: departmentLoading } =
    useDepartmentList(hospitalId);
  console.log(doctorLoading);
  const departmentOptions = departments?.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  // const query = doctor ? `doctor_id=${doctor}` : "";
  // const { data: doctorList, isLoading } = useDepartmentList(hospitalId, query);
  // console.log(doctorList);

  const doctorOptions = doctorsList?.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  const [doctorId, setDoctorId] = useState("");
  const [department, setDepartment] = useState();
  const [appointment, setAppointmentType] = useState();
  const [appointmentDate, setAppointmentDate] = useState();
  const [timeSlot, setTimeSlot] = useState("");
  console.log(doctorId);
  console.log(department);
  console.log(appointment);
  console.log(appointmentDate);

  const { data: timeslots, isLoading: timeslotLoading } = useGetTimeslots(
    doctorId,
    hospitalId,
    appointmentDate
  );
  console.log("Doctor ID: ", timeslotLoading);
  console.log("Time slots ", timeslots);
  const { morning, evening, afternoon } = categorizeSlots(timeslots || []);
  const handelTimeslot = (slot) => {
    console.log(slot);
    setTimeSlot(slot);
  };
  const tabData = [
    {
      id: "schedule_morning",
      title: "Morning",
      content: (
        <Timeslot
          slots={morning || []}
          handelTimeslot={handelTimeslot}
          loading={timeslotLoading}
        />
      ),
      link: "morning",
      mainTab: "requested",
    },
    {
      id: "schedule_afternoon",
      title: "Afternoon",
      content: (
        <Timeslot
          slots={afternoon || []}
          handelTimeslot={handelTimeslot}
          loading={timeslotLoading}
        />
      ),
      link: "afternoon",
      mainTab: "requested",
    },
    {
      id: "schedule_evening",
      title: "Evening",
      content: (
        <Timeslot
          slots={evening || []}
          handelTimeslot={handelTimeslot}
          loading={timeslotLoading}
        />
      ),
      link: "evening",
      mainTab: "requested",
    },
  ];

  const onCreateAppointment = (data) => {
    console.log("data", data);
    const appointmentData = {
      doctor_id: doctorId,
      appointmentDate: appointmentDate,
      is_online: false,
      amount: data.amount,
      user_details: {
        name: data.patientname,
        age: data.patientAge,
        gender: data.gender.value,
        phone_number: data.contactNumber,
      },
      hospital_id: hospitalId,
      timeSlot: timeSlot,
      // type:appointment
    };
    createAppointment(appointmentData, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  const WatchAppointmentChange = () => {
    const { control } = useFormContext();
    const appointment = useWatch({ control, name: "appointmentDate" }); // replace with your actual `name`

    useEffect(() => {
      if (appointment !== undefined) {
        console.log("Price field changed:", appointment);
        // You can trigger any side-effect here
        setAppointmentDate(appointment);
      }
    }, [appointment]);

    return null; // no UI output
  };

  return (
    <FormProvider {...methods}>
      <form
        className="bg-white rounded ps-1 pe-1"
        onSubmit={methods.handleSubmit(onCreateAppointment)}
      >
        <h4 className="card-title mt-2">Patient Details</h4>

        <div className="row mt-2">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="patientname"
                label="Patient Name"
                validation={{ required: "Patient Name is required" }}
                placeholder="Enter patient name"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <InputField
                name="patientAge"
                label="Patient Age"
                validation={{ required: "Patient age is required" }}
                placeholder="Patient age"
                type="number"
              />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <SelectField
                options={genderOptions}
                label="Gender"
                name="gender"
                isMultiSelect={false}
                placeholder="Select Gender"
                validationMessage="Gender is required"
                // isLoading={isLoading}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="contactNumber"
                label="Contact Number"
                validation={{ required: "Contact number is required" }}
                placeholder="Contact number"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="appointmentDate"
                label="Appointment Date"
                validation={{ required: "Appointment date is required" }}
                // placeholder="Contact number"
                type="date"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="amount"
                label="Amount"
                validation={{ required: "Amount is required" }}
                // placeholder="Contact number"
                type="price"
              />
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="jobtitle"
                label="Job Title"
                validation={{ required: "Job title is required" }}
                placeholder="Enter job title"
                type="text"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <SelectField
                // options={departmentOptions}
                label="Department"
                name="department"
                isMultiSelect={true}
                placeholder="Select Department"
                validationMessage="Department is required"
                // isLoading={isLoading}
              />
            </div>
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="password"
                label="Password"
                validation={{ required: "Password is required" }}
                placeholder="Enter password"
                type="password"
              />
            </div>
          </div>
        </div> */}

        {/* <h4 className="card-title mt-2">Address</h4> */}
        {/* <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <InputField
                name="pincode"
                label=""
                validation={{ required: "Pincode is required" }}
                placeholder="Pincode"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <InputField
                name="street"
                label=""
                validation={{ required: "Area / Street / Sector is required" }}
                placeholder="Area / Street / Sector"
                type="text"
              />
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col">
            <div className="form-group">
              <TextArea
                name="address"
                label="Address"
                validation={{ required: "Address is required" }}
                placeholder="Enter Address"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <TextArea
                name="note"
                label="Patient Note"
                // validation={{ required: "Patient note is required" }}
                placeholder="Enter patient note"
              />
            </div>
          </div>
        </div>

        <h4 className="card-title mt-2">More Information</h4>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label className="form-label">Assign Doctor</label>
              <Select
                options={doctorOptions}
                placeholder="Assign doctor"
                name="doctor"
                isMultiSelect={false}
                isLoading={doctorLoading}
                onChange={(selectedOption) => {
                  setDoctorId(selectedOption.value ?? "");
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label className="form-label">Department</label>

              <Select
                options={departmentOptions}
                placeholder="Department"
                name="department"
                isMultiSelect={false}
                isLoading={departmentLoading}
                onChange={(selectedOption) => {
                  setDepartment(selectedOption.value ?? "");
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label className="form-label">Appointment Type</label>
              <Select
                options={appointmentType}
                placeholder="Appointment Type"
                name="appointmentType"
                isMultiSelect={false}
                // isLoading={doctorLoading}
                onChange={(selectedOption) => {
                  setAppointmentType(selectedOption.value ?? "");
                }}
              />
            </div>
          </div>

          <h4 className="card-title mt-2">Available Timeslots</h4>

          <ModalTabs tabData={tabData} />

          {/* <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="city"
                label=""
                validation={{ required: "Town / City is required" }}
                placeholder="Town / City"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <InputField
                name="state"
                label=""
                validation={{ required: "State" }}
                placeholder="State"
                type="text"
              />
            </div>
          </div> */}
        </div>
        <WatchAppointmentChange />
        <div className="d-flex justify-content-end ps-3 pe-3 pb-5 pt-3">
          <Button variant="primary" className="ps-5 pe-5" type="submit">
            {appointmentLoading && (
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
            )}
            <span className="ps-2">Submit</span>
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

CreateAppointment.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CreateAppointment;
