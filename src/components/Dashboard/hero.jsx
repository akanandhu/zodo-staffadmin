{
  /* /Page Header */
}
import React from "react";
// import { morning_img_01 } from "../imagepath";
function Hero() {
  return (
    <div className="good-morning-blk mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="morning-user">
            <h2>
              Good Morning, <span>User</span>
            </h2>
            <p>Have a nice day</p>
          </div>
        </div>
        {/* <div className="col-md-6 position-blk">
          <div className="morning-img">
            <img src={morning_img_01} alt="#" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
