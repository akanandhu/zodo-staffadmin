import React, { useState } from "react";
import { fasttag, fasttag_revenue } from "../imagepath";
import CountUp from "react-countup";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from 'react-select'
import { Link } from "react-router-dom";

function RevenueInfo() {
  const [bookingType] = useState([
    { value: 1, label: "Hospital Booking" },
  ]);
const [selectedOption, setSelectedOption] = useState(bookingType[0]);
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6">
          <div className="dash-widget">
            <div className="d-flex justify-content-between">
              <div className="dash-boxs comman-flex-center">
                <img src={fasttag} alt="#" />
              </div>
              <div>
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
                      boxShadow: state.isFocused ? "0 0 0 1px #2e37a4" : "none",
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
            <Link className="dash-content dash-count flex-grow-1" to="settlement-requests"> 
              <h4>Settlement Request</h4>
              <h2>
                {" "}
                <CountUp delay={0.4} end={0} duration={0.6} />
              </h2>
              <p>
                <span className="passive-view">
                  {/* <i className="feather-arrow-up-right me-1">
                    <FeatherIcon icon="arrow-up-right" />
                  </i> */}
                  See All Request
                </span>{" "}
              </p>
            </Link>
          </div>
        </div>

        <Link className="col-md-6 col-sm-6 col-lg-6 col-xl-6" to='fasttag-revenue'>
          <div className="dash-widget">
            <div className="dash-boxs comman-flex-center">
              <img src={fasttag_revenue} alt="#" />
            </div>
            <div className="dash-content dash-count flex-grow-1">
              <h4>Fast tag Revenue</h4>
              <h2>
                {" "}
                $<CountUp delay={0.4} end={20250} duration={0.6} />
              </h2>
              <p>
                <span className="passive-view">
                  <i className="feather-arrow-up-right me-1">
                    <FeatherIcon icon="arrow-up-right" />
                  </i>
                  30%
                </span>{" "}
                vs last month
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default RevenueInfo;
