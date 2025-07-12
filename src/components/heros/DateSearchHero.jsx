import { DatePicker } from "antd";
import PropTypes from "prop-types";
import ExportHospitalAppointments from "../Appointment/ExportHospitalAppointments";
import ExportDoctorAppointments from "../Appointment/ExportDoctorAppointments";
import ServiceAppointments from "../Appointment/ServiceAppointments";
const { RangePicker } = DatePicker;

function DateSearchHero(props) {
  const { handleDate, type, id } = props;
  return (
    <div className="row mt-4">
      <div className="col-12 col-md-6 col-xl-4">
        <div className="form-group">
          <RangePicker
          format="DD/MM/YYYY"
            // showTime
            onChange={(date) => handleDate(date)}
            // suffixIcon={null}
            className="range-picker form-control d-flex datetimepicker"
            allowClear
          />
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        {type === "hospital-bookings" &&   <ExportHospitalAppointments />}
        {type === "doctor-booking" && <ExportDoctorAppointments id={id}/>}
        {type === "service-booking" && <ServiceAppointments id={id}/>}


      </div>
    </div>
  );
}

// validate props
DateSearchHero.propTypes = {
  handleDate: PropTypes.func.isRequired,
  type: PropTypes.string,
  id: PropTypes.string
};

export default DateSearchHero;
