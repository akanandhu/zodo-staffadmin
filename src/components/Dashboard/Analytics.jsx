import React, { useState } from "react";
import Select from 'react-select'
import PatientChart from "./PaitentChart";
function Analytics() {
    const [bookingType] = useState([
      { value: 1, label: "Hospital Booking" },
    ]);
  const [selectedOption, setSelectedOption] = useState(bookingType[0]);
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="chart-title patient-visit">
                <h4>Analytics</h4>
                <div>
                  
                  <h6>Total bookings <span className="analytics-count">2000</span></h6>
                </div>
                <div className="form-group mb-0">
                  <Select
                    className="custom-react-select"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={bookingType}
                    id="search-commodity"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused
                          ? "none"
                          : "2px solid rgba(46, 55, 164, 0.1);",
                        boxShadow: state.isFocused
                          ? "0 0 0 1px #2e37a4"
                          : "none",
                        "&:hover": {
                          borderColor: state.isFocused
                            ? "none"
                            : "2px solid rgba(46, 55, 164, 0.1)",
                        },
                        borderRadius: "10px",
                        fontSize: "14px",
                        minHeight: "45px",
                      }),
                      dropdownIndicator: (base, state) => ({
                        ...base,
                        transform: state.selectProps.menuIsOpen
                          ? "rotate(-180deg)"
                          : "rotate(0)",
                        transition: "250ms",
                        width: "35px",
                        height: "35px",
                      }),
                    }}
                  />
                </div>
              </div>
              <div id="patient-chart" />
              <PatientChart />
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Analytics;
