import React, { useState } from "react";
// import SwitchSelector from "react-switch-selector";
import Select from "react-select";
import FasttagToggle from "../FasttagRevenue/FasttagToggle";

function FastTag() {
  const [selectedOption, setSelectedOption] = useState({
    label: "10",
    value: "10",
  });
  const [tagsCount] = useState([
    { label: "10", value: "10" },
    { label: "15", value: "15" },
    { label: "20", value: "20" },
    { label: "25", value: "25" },
  ]);
  // const onChange = (newValue) => {
  //   console.log(newValue);
  // };

  // const options = [
  //   {
  //     label: "",
  //     value: "",
  //     selectedBackgroundColor: "#FFFFFF",
  //   },
  //   {
  //     label: "",
  //     value: "",
  //     selectedBackgroundColor: "#FFFFFF",
  //   },
  // ];

  // const initialSelectedIndex = options.findIndex(
  //   ({ value }) => value === "bar"
  // );
  return (
    <div>
      <div className="d-flex">

      <h5 className="ms-md-5 pt-1">FAST TAG</h5>
      {/* <div className="fastag-switch ms-md-5">
        <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#34C759"}
        fontColor={"#f5f6fa"}
        />
        </div> */}
      <div className="ms-5">

      <FasttagToggle />
      </div>
        </div>
      <div className="mt-3 ps-md-5">
        <h5>Select Fast Tag Count Per Day</h5>
        <div className="w-75">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={tagsCount}
          />
        </div>
      </div>
    </div>
  );
}

export default FastTag;
