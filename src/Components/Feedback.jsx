import React from "react";
import { Link } from "react-router-dom";

function Feedback() {
  return (
    <div className="feedback">
      <div className="feedImg">
        <img alt="" src="Images/model_10.png" className="feedModel" />
      </div>

      <div className="cont">
        <div className="test">
          <img
            alt=""
            src="Images/top_20_trends_for_spring_.png"
            className="top20"
          />
          <div className="content">
            With Seventies influences from Saturday night fever to hippy deluxe,
            a khaki nod to military style alongside nautical accents,
            experiments with transparency, pathways of vintage prints and a mix
            & match approach to volume and fabric, for Summer 2015 we're set to
            see contrast take center stage. Stay a step ahead as we present a
            round-up of the runway trends set to take Spring/Summer 2015 by
            storm.
          </div>
          <Link to="/more" className="more">
            MORE
          </Link>
        </div>

        <img alt="" src="Images/2015.png" className="year" />

        <div className="dots">
          <div className="dot1"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
