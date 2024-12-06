import React from "react";
import { Link } from "react-router-dom";
import { user_profile } from "../imagepath";
import PropTypes from "prop-types";
function Table(props) {
  const { data } = props;
  return (
    <>
      <div className="col-lg-6">
        <div className="card-box">
          <div className="card-block">
            <div className="d-flex justify-content-between table-link">
            <h3 className="card-title">{data.title}</h3>
            <p><Link to="#">See all</Link></p>
            </div>
            <div className="table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    {data.columns.map((item, i) => {
                      return (
                        <th key={`hospital+${item}+${i}`}>
                          <h6>{item}</h6>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map((row, i) => {
                    return (
                      <tr key={row.email + i}>
                        <td className="d-flex dash-table align-middle pt-3">
                          <img src={user_profile} width={35} height={35} />
                          <span className="ms-2">
                            <h6>{row.name}</h6>
                            <p>{row.email}</p>
                          </span>
                        </td>
                        <td className="align-middle">{row.contact}</td>
                        <td className="align-middle table-action">
                          <p><Link to="#">{row.action}</Link></p> 
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Table.propTypes = {
    data: PropTypes.node,
  };
export default Table;
