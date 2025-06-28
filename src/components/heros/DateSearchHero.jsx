import { DatePicker } from "antd";
import ExportTable from "../assests/ExportTable";
import PropTypes from "prop-types";
const { RangePicker } = DatePicker;

function DateSearchHero(props) {
  const { handleDate } = props;
  //   const [show, setShow] = useState(false);
  // const [searchTerm, setSearchterm] = useState("");
  // const debouncedSearchTerm = useDebounce(searchTerm);
  // useEffect(() => {
  //   if (handleSearch) {
  //     handleSearch(debouncedSearchTerm);
  //   }
  // }, [debouncedSearchTerm]);

  // const handleSearchInput = (searchTerm) => {
  //   setSearchterm(searchTerm);
  // };
  return (
    <div className="row mt-4">
      {/* <div className="col-12 col-md-6 col-xl-3">
        <div>
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) => handleSearchInput(e.target.value)}
            />
          </div>
        </div>
      </div> */}
      <div className="col-12 col-md-6 col-xl-4">
        <div className="form-group local-forms cal-icon">
          <RangePicker
            showTime
            onChange={(date) => handleDate(date)}
            suffixIcon={null}
            className="range-picker form-control d-flex datetimepicker"
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
  // handleSearch: PropTypes.func.isRequired,
};

export default DateSearchHero;
