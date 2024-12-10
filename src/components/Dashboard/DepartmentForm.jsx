import React from "react";

function DepartmentForm() {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-10">
          <div className="form-group">
            <label>Department Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter department name"
            />
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <label>Status</label>
            <select className="form-control text-primary">
              <option>Active</option>
              <option>In Active</option>
            </select>
          </div>
        </div>
      </div>
      <h4 className="card-title mt-2">Department Details</h4>
      <div className="form-group mt-3">
        <label>Category</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter type"
        />
      </div>
      <div className="form-group">
        <label>Department Head (Optional)</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter type"
        />
      </div>
    </div>
  );
}

export default DepartmentForm;
