import React from "react";
import SearchBox from "../../searchbox/SearchBox";
import { Link } from "react-router-dom";
import { addicon } from "../../imagepath";

function ServiceSearch() {
  return (
    // <div className="ps-3 pe-3 doctor-search card-box">
    //   <div className="row  d-flex align-items-center bg-white">
    //     <div className="col-12  col-md-1">
    //       <div className="doctor-table-blk">
    //         <h3>All Services</h3> 
    //       </div>
    //     </div>
    //     <div className="col-12 col-md-3 ms-md-4">
    //       <div className="doctor-list-search">
    //         <div className="search-container pt-2">
    //           <SearchBox />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-md col-sm-12">
    //       <div className="invoices-create-btn d-flex justify-content-md-end">
    //         <Link
    //           to
              
    //           className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2"
    //         >
    //           <img src={addicon} alt="add" />
    //           <span className="ms-2 me-2" 
           
    //           >
    //             Add Service
    //           </span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
      
    // </div>

    <div className="page-header invoices-page-header">
      <div className="d-flex flex-column flex-md-row">
        <div className="w-50 d-flex align-items-center flex-column flex-md-row">
          <div className="search-hero-header">
            <h3>All Services</h3>
          </div>
          <div className="ms-3 w-50">
            <SearchBox />
          </div>
        </div>

        <div className="w-50 d-flex align-items-center justify-content-end flex-column flex-md-row">
          <div className="">
            <div className="invoices-create-btn d-flex justify-content-md-end">
              <Link
                to
                className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2"
                // onClick={() => setShow(true)}
              >
                <img src={addicon} alt="add" />
                <span className="ms-2 me-2">Add Service</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSearch;
