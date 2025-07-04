import PropTypes from "prop-types";
import React from "react";
import ImageBox from "../../assests/ImageBox";
import DescriptionBox from "../../assests/DescriptionBox";

function ServiceDetails({ data }) {

  return (
    <div>
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <ImageBox
            src={data?.image}
            alt="Service"
            width="200px"
            height="100%"
            className="service-banner"
          />
          <div className="main-balance pe-4">
            <p>Daily Bookings Count</p>
            <h4>{data?.daily_booking_count}</h4>
          </div>
        </div>

        <div className="ps-3 pe-3 mt-3 mb-3">
            <h6 className="description-header">About {data?.name}</h6>
            <DescriptionBox text={data?.description}/>
        </div>

        <div className="settlement-card mt-2">
          <div className="settlemet-details">
            <p>Price</p>
            <h4>₹ {data?.price ?? 0}</h4>
          </div>
          <div className="settlemet-details">
            <p>Discounted Price</p>
            <h4 className="text-primary">
              ₹ {data?.strike_through_price ?? 0}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

// props validation
ServiceDetails.propTypes = {
  data: PropTypes.object,
};

export default ServiceDetails;
