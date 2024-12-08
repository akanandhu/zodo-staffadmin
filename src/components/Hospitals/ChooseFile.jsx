import React from "react";

function ChooseFile() {
  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <div className="row">
      <div className="col-md-1 upload-preview ms-2">
        <small className="text-muted">preview</small>
      </div>
      <div className="col ms-md-2">
        <div className="upload-text">
          <small className="text-muted">Please upload square image of size less than 2 MB</small>
        </div>
        <button
          className="choose-file-btn mt-2 bg-white"
          onClick={handleButtonClick}
        >
          <input
            type="file"
            className="form-control d-none"
            // id="inputGroupFile02"
            id="fileInput"
          />
          <span className="choose-file-label">Choose file</span>
        </button>
      </div>
    </div>
  );
}

export default ChooseFile;
