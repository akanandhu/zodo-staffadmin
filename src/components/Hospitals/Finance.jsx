import React from "react";
import { bin_icon_red, right_chevron } from "../imagepath";
import TransactionTable from "./Transactions/TransactionTable";
import { DatePicker } from "antd";
import OverViewCard from "./OverViewCard";
import ExportTable from "../assests/ExportTable";

function Finance() {
  const financeData = [
    {
      id: 1,
      amount: "$ 20,000",
      status: "No Dues",
      operation: "Settlement",
    },
    {
      id: 2,
      amount: "$ 20,000",
      status: "No Dues",
      operation: "Total Revenue In Month",
    },
    {
      id: 3,
      amount: "$ 2000",
      status: "No Dues",
      operation: "Total Balance",
    },
    {
      id: 4,
      amount: "20%",
      status: "No Dues",
      operation: "Fast Tag Commission %",
    },
    {
      id: 5,
      amount: "4",
      status: "",
      operation: "Department",
    },
    {
      id: 6,
      amount: "$ 20,000",
      status: "No Dues",
      operation: "Fast Tag Revenue",
    },
  ];
  return (
    <div className="pb-3">
      <div className="row pt-2">
        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 20,000</h6>
              <p>
                <span className="custom-badge status-orange">
                  REQUESTED AMOUNT
                </span>
              </p>
              <div className="row">
                <p className="col">Requested On 24-11-2024</p>
              </div>
              <div>
                <button
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#save_invocies_details"
                  className="hospital-add-btn rounded-pill text-white mt-2 border-0 text ps-3 pe-3 pt-1 pb-1"
                >
                  Paid Fully
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75 pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 0</h6>
              <p>
                <span className="text-danger custom-badge status-red">
                  NO DUES
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75 pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 20,000</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">Total Revenue In Month</span>
                  </p>
                </div>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 20,000</h6>
              <p>
                <span className="passive-view">No Dues</span>
              </p>
              <div className="row">
                <p className="text-dark mt-2 col">Total Balance</p>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Finance details */}

      <div className="row finance-card-container">
        {financeData.map((item) => (
          <OverViewCard
            varient="col-md-4 col-sm-6 col-lg-4 col-xl-4 finance-card"
            data={item}
            key={item.id}
          />
        ))}
      </div>

      <div className="card-box finance-card">
        <h5>Transactions</h5>
        <div className="row mt-4">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group local-forms cal-icon">
              <DatePicker
                className="form-control datetimepicker"
                // onChange={onChange}
                suffixIcon={null}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group local-forms">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <ExportTable />
          </div>
        </div>
        <div>
          <h5>
            {232} results found{" "}
            <span className="delete-badge status-red ms-1">
              <img
                src={bin_icon_red}
                alt="delete"
                className="dropdown-menu-icon"
                width={15}
                height={15}
              />
              <span className="mt-5 ps-2">CLEAR</span>
            </span>
          </h5>
        </div>
        <TransactionTable />
      </div>
    </div>
  );
}

export default Finance;
