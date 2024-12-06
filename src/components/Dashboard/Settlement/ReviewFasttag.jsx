import React, { useState } from "react";
import Select from "react-select";
import FasttagToggle from "../../FasttagRevenue/FasttagToggle";
import { pencil_icon } from "../../imagepath";
import { Link, useParams } from "react-router-dom";

function ReviewFasttag() {
  const { id } = useParams(); 
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
  return (
    <div className="card-box">
      <div className="row">
        <div className="col">
          <h4 className="card-title">About Fast Tag</h4>
        </div>
        <div className="col d-flex justify-content-end">
          <Link to={`/manage-hospitals/manage-request/${id}/edit`}>
            <img src={pencil_icon} alt="edit" width={18} height={18} />
          </Link>
        </div>
      </div>

      <div className="mt-3">
        <h5>Select Fast Tag Count Per Day</h5>
        <div className="w-sm-50 w-25">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={tagsCount}
          />
        </div>
      </div>

      <div className="d-flex mt-3">
        <label className="">Enable Fast Tag</label>
        <div className="ms-2">
          <FasttagToggle />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <div className="form-group">
            <label>Choose Percentage of Profit</label>
            <Select
            // defaultValue={selectedOption}
            // onChange={setSelectedOption}
            // options={option}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Fast tag Issue Per Day</label>
            <Select
            // defaultValue={selectedOption}
            // onChange={setSelectedOption}
            // options={option}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewFasttag;
