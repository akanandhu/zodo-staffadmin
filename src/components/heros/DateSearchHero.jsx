import { DatePicker } from "antd";
import PropTypes from "prop-types";
import ExportHospitalAppointments from "../Appointment/ExportHospitalAppointments";
const { RangePicker } = DatePicker;

function DateSearchHero(props) {
  const { handleDate, type } = props;
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
      </div>
    </div>
  );
}

// validate props
DateSearchHero.propTypes = {
  handleDate: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default DateSearchHero;
