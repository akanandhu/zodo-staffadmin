import CountUp from "react-countup";
import PropTypes from "prop-types";
import FasttagToggle from "../FasttagRevenue/FasttagToggle";

function InfoCards(props) {
  const { info } = props;
  return (
    <div className="row">
      {info.map((item) => {
        return (
          <div
            to={item.link}
            className="col-md-3 col-sm-3 col-lg-4 col-xl-4 info-card-link"
            key={item.id + item.title}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <div className="dash-widget">
              <div className="dash-boxs comman-flex-center">
                <img src={item.icon} alt="#" />
              </div>
              <div className="dash-content dash-count flex-grow-1">
                <h4>{item.title}</h4>
                {item.type !== "fasttag" ? (
                  <h2>
                    {item.type === "currency" && (
                      <span className="currency-symbol">₹</span>
                    )}{" "}
                    <CountUp delay={0.4} end={item.count} duration={0.6} />
                  </h2>
                ) : (
                  <div className="fasttag-toggle">
                    <FasttagToggle toggleFasttag={item.count} />
                  </div>
                )}
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
          </div>
        );
      })}
    </div>
  );
}

InfoCards.propTypes = {
  info: PropTypes.node,
};
export default InfoCards;
