import CountUp from "react-countup";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function InfoCards(props) {
  const { info } = props;
  return (
    <div className="row">
      {info.map((item) => {
        return (
          <Link
            to={item.link}
            className="col-md-3 col-sm-3 col-lg-4 col-xl-4"
            key={item.id + item.title}
          >
            <div className="dash-widget">
              <div className="dash-boxs comman-flex-center">
                <img src={item.icon} alt="#" />
              </div>
              <div className="dash-content dash-count flex-grow-1">
                <h4>{item.title}</h4>
                <h2>
                  {item.type === "currency" && (
                    <span className="currency-symbol">₹</span>
                  )}{" "}
                  <CountUp delay={0.4} end={item.count} duration={0.6} />
                </h2>
                {/* <p>
                  <span className="passive-view">
                    <i className="feather-arrow-up-right me-1">
                      <FeatherIcon icon="arrow-up-right" />
                    </i>
                    {item.percentageUp}%
                  </span>{" "}
                  vs last month
                </p> */}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

InfoCards.propTypes = {
  info: PropTypes.node,
};
export default InfoCards;
