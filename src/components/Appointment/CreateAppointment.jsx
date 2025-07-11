import PropTypes from "prop-types";
import { useState } from "react";
import ConsultationAppointment from "./ConsultationAppointment";
import ServiceAppointment from "./ServiceAppointment";

function CreateAppointment({ handleClose }) {
  console.log(handleClose);
  
  // const { hospitalId } = useAuth();
  // const { mutate: createAppointment, isLoading: appointmentLoading } =
  //   useCreateOfflineAppointments();
  // const methods = useForm();
  // const genderOptions = [
  //   { value: "male", label: "Male" },
  //   { value: "female", label: "Female" },
  //   { value: "others", label: "Others" },
  // ];
  // const appointmentType = [
  //   { value: "fast_tag", label: "Fast Tag" },
  //   { value: "consultation", label: "Consultation" },
  // ];

  // const paymentType = [
  //   { value: "online", label: "Online" },
  //   { value: "offline", label: "Cash on Hospital" },
  // ];

  // const { data: doctorsList, isLoading: doctorLoading } =
  //   useDoctorsList(hospitalId);

  // const doctorOptions = doctorsList?.map((item) => ({
  //   label: item.name,
  //   value: item.id,
  // }));
  // const [doctorId, setDoctorId] = useState("");
  // const [appointment, setAppointmentType] = useState();
  // const [paymentTypes, setPaymentType] = useState();
  // const [appointmentDate, setAppointmentDate] = useState();
  // const [timeSlot, setTimeSlot] = useState("");
  // const { data: services, isLoading: serviceLoading } =
  //   useHospitalServices(hospitalId);
  // const serviceOptions = services?.map((item) => ({
  //   label: item.name,
  //   value: item.id,
  // }));
  // console.log(doctorId);
  // console.log(appointment);
  // console.log(appointmentDate);
  // console.log(paymentTypes);

  // const { data: timeslots, isLoading: timeslotLoading } = useGetTimeslots(
  //   doctorId,
  //   hospitalId,
  //   appointmentDate
  // );
  // const { morning, evening, afternoon } = categorizeSlots(timeslots || []);
  // const handelTimeslot = (slot) => {
  //   setTimeSlot(slot);
  // };
  // const tabData = [
  //   {
  //     id: "schedule_morning",
  //     title: "Morning",
  //     content: (
  //       <Timeslot
  //         slots={morning || []}
  //         handelTimeslot={handelTimeslot}
  //         loading={timeslotLoading}
  //       />
  //     ),
  //     link: "morning",
  //     mainTab: "requested",
  //   },
  //   {
  //     id: "schedule_afternoon",
  //     title: "Afternoon",
  //     content: (
  //       <Timeslot
  //         slots={afternoon || []}
  //         handelTimeslot={handelTimeslot}
  //         loading={timeslotLoading}
  //       />
  //     ),
  //     link: "afternoon",
  //     mainTab: "requested",
  //   },
  //   {
  //     id: "schedule_evening",
  //     title: "Evening",
  //     content: (
  //       <Timeslot
  //         slots={evening || []}
  //         handelTimeslot={handelTimeslot}
  //         loading={timeslotLoading}
  //       />
  //     ),
  //     link: "evening",
  //     mainTab: "requested",
  //   },
  // ];

  // const onCreateAppointment = (data) => {
  //   const appointmentData = {
  //     doctor_id: doctorId,
  //     appointmentDate: appointmentDate,
  //     is_online: false,
  //     amount: data.amount,
  //     user_details: {
  //       name: data.patientname,
  //       age: parseInt(data.patientAge),
  //       gender: data.gender.value,
  //       phone_number: data.contactNumber,
  //     },
  //     hospital_id: hospitalId,
  //     timeSlot: timeSlot,
  //     payment_type: paymentTypes,
  //     // type:appointment
  //   };
  //   console.log("Appointment data ", appointmentData);

  //   console.log(createAppointment);
  //   console.log(handleClose);

  //   createAppointment(appointmentData, {
  //     onSuccess: () => {
  //       handleClose();
  //       methods.reset();
  //     },
  //   });
  // };

  // const WatchAppointmentChange = () => {
  //   const { control } = useFormContext();
  //   const appointment = useWatch({ control, name: "appointmentDate" }); // replace with your actual `name`

  //   useEffect(() => {
  //     if (appointment !== undefined) {
  //       // You can trigger any side-effect here
  //       setAppointmentDate(appointment);
  //     }
  //   }, [appointment]);

  //   return null; // no UI output
  // };

  const [bookingType, setBookingType] = useState("consultation");

  return (
    // <FormProvider {...methods}>
      <div
        className="bg-white rounded ps-1 pe-1"
        // onSubmit={methods.handleSubmit(onCreateAppointment)}
      >
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="form-group">
              <h4 className="booking-title mt-2">Booking Type</h4>
              <div className="d-flex gap-4 mt-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="bookingType"
                    value="consultation"
                    checked={bookingType === "consultation"}
                    onChange={() => setBookingType("consultation")}
                    id="consultationRadio"
                  />
                  <label
                    className="form-check-label fw-bolder"
                    htmlFor="consultationRadio"
                  >
                    Consultation
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="bookingType"
                    value="service"
                    checked={bookingType === "service"}
                    onChange={() => setBookingType("service")}
                    id="serviceRadio"
                  />
                  <label
                    className="form-check-label fw-bolder"
                    htmlFor="serviceRadio"
                  >
                    Service Booking
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {bookingType === "consultation" && <ConsultationAppointment handleClose={handleClose}/>}
        {bookingType === "service" && <ServiceAppointment handleClose={handleClose}/>}

        {/* <h4 className="card-title mt-2">Patient Details</h4>
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
            <InputField
              name="contactNumber"
              label="Contact Number"
              validation={{ required: "Contact number is required" }}
              placeholder="Contact number"
              type="text"
            />
          </div>
          <div className="col-md-4">
            <InputField
              name="appointmentDate"
              label="Appointment Date"
              validation={{ required: "Appointment date is required" }}
              type="date"
            />
          </div>
          <div className="col-md-4">
            <InputField
              name="amount"
              label="Amount"
              validation={{ required: "Amount is required" }}
              type="price"
            />
          </div>
        </div>

        {bookingType === "service" && (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <SelectField
                    options={serviceOptions}
                    label="Specialisation"
                    name="specilalisation"
                    isMultiSelect={false}
                    placeholder="Select Specialisation"
                    validationMessage="Specialisation is required"
                    isLoading={serviceLoading}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div className="row">
          <div className="col">
            <TextArea
              name="address"
              label="Address"
              validation={{ required: "Address is required" }}
              placeholder="Enter Address"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TextArea
              name="note"
              label="Patient Note"
              placeholder="Enter patient note"
            />
          </div>
        </div>

        {bookingType === "consultation" && (
          <>
            <h4 className="card-title mt-2">More Information</h4>
            <div className="row">
              <div className="col-md-4">
                <label className="form-label">Assign Doctor</label>
                <Select
                  options={doctorOptions}
                  placeholder="Assign doctor"
                  isMultiSelect={false}
                  isLoading={doctorLoading}
                  onChange={(selectedOption) =>
                    setDoctorId(selectedOption.value ?? "")
                  }
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Appointment Type</label>
                <Select
                  options={appointmentType}
                  placeholder="Appointment Type"
                  isMultiSelect={false}
                  onChange={(selectedOption) =>
                    setAppointmentType(selectedOption.value ?? "")
                  }
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Payment Type</label>
                <Select
                  options={paymentType}
                  placeholder="Payment Type"
                  isMultiSelect={false}
                  onChange={(selectedOption) =>
                    setPaymentType(selectedOption.value ?? "")
                  }
                />
              </div>
            </div>

            <h4 className="card-title mt-2">Available Timeslots</h4>
            <ModalTabs tabData={tabData} />
          </>
        )}


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
        </div> */}
      </div>
    // </FormProvider>
  );
}

CreateAppointment.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CreateAppointment;
