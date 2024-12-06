import React from "react";
import { cross_icon, eye_icon, pdf_icon, pencil_icon } from "../../imagepath";
import { Link, useParams } from "react-router-dom";

function UploadedDocuments() {
  const { id } = useParams(); 
  return (
    <div className="card-box">
      <div className="row">
        <div className="row">
          <div className="col">
            <h4 className="">Uploaded Documents</h4>
          </div>
          <div className="col d-flex justify-content-end">
            <Link to={`/manage-hospitals/manage-request/${id}/edit`}>
              <img src={pencil_icon} alt="edit" width={18} height={18} />
            </Link>
          </div>
        </div>
        <div className="mt-2">
          {[1, 2, 3].map((item) => {
            return (
              <div className="row mt-2" key={`row${item}`}>
                <div className="col-12 pt-2 col-md-2">Documents 0{item}</div>
                <div className="col-12 col-md-10 md:mt-0 mt-1">
                  <div className="d-flex justify-content-between align-items-center file-upload-details ps-3 pe-3">
                    <div className="d-flex align-items-center">
                      <img src={pdf_icon} alt="pdf_icon" />
                      <div className="d-flex flex-column justify-content-center file-details ms-2">
                        <h6>Reg 0{item}</h6>
                        <p>24MB</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="m-1">
                        <img src={eye_icon} alt="" />
                      </div>
                      <div className="m-1">
                        <img src={cross_icon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UploadedDocuments;
