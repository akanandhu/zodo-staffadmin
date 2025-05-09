import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import ExportTable from "../assests/ExportTable";
import { useDebounce } from "../../hooks/useDebounce";
import PropTypes from "prop-types";

function DateSearchHero(props) {
  const { handleSearch, handleDate } = props;
  //   const [show, setShow] = useState(false);
  const [searchTerm, setSearchterm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);
  useEffect(() => {
    handleSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleSearchInput = (searchTerm) => {
    setSearchterm(searchTerm);
  };
  return (
    <div className="row mt-4">
      <div className="col-12 col-md-6 col-xl-3">
        <div>
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) =>
                handleSearchInput(e.target.value.toLocaleLowerCase())
              }
            />
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <div className="form-group local-forms cal-icon">
          <DatePicker
            className="form-control datetimepicker"
            // onChange={onChange}
            onChange={handleDate}
            suffixIcon={null}
          />
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        <ExportTable />
      </div>
    </div>
  );
}

// validate props
DateSearchHero.propTypes = {
  handleDate: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default DateSearchHero;
