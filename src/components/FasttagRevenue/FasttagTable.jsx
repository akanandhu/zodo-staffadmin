import PropTypes from "prop-types";
import React from "react";

function FasttagTable(props) {
  const { rows, columns } = props;
  return (
    <div>
      <div className="card-box">
        <div className="card-block">
          <div className="table-responsive">
            <table className="table mb-0 fasttag-table">
              <thead>
                <tr>
                  {columns.map((column, i) => {
                    return (
                      <th key={column.key + i}>
                        {" "}
                        <h6>{column.label}</h6>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  return (
                    <tr key={row.id + i}>
                      {columns.map((column, index) => {
                        return (
                          <td key={column.label + index}>
                            {console.log("Row ",row)}
                            {" "}
                            <span >
                              {row.image && index == 0 && (
                                <img src={row.image} alt="hospital_logo" />
                              )}
                            </span>{"  "}
                            {row[column.key]}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

FasttagTable.propTypes = {
  rows: PropTypes.node,
  columns: PropTypes.node,
};

export default FasttagTable;
