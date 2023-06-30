/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Plan = ({
  className,
  basicPlanClassName,
  text = "Basic Plan",
  loremIpsumIsClassName,
  elementClassName,
  monthClassName,
  vector = "https://generation-sessions.s3.amazonaws.com/ccf685f6f332414cf14b8399a40e501b/img/vector-11.svg",
  freeAccessToVideoClassName,
  img = "https://generation-sessions.s3.amazonaws.com/ccf685f6f332414cf14b8399a40e501b/img/vector-11.svg",
  freeAccessToVideoClassNameOverride,
  vector1 = "https://generation-sessions.s3.amazonaws.com/ccf685f6f332414cf14b8399a40e501b/img/vector-11.svg",
  pClassName,
  frameClassName,
}) => {
  return (
    <div className={`plan ${className}`}>
      <div className="div">
        <div className={`basic-plan ${basicPlanClassName}`}>{text}</div>
        <p className={`text-wrapper ${loremIpsumIsClassName}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
      </div>
      <div className="frame-2">
        <div className={`element ${elementClassName}`}>$ 54</div>
        <div className={`month ${monthClassName}`}>/month</div>
      </div>
      <div className="frame-3">
        <div className="frame-4">
          <img className="vector" alt="Vector" src={vector} />
          <p className={`free-access-to-video ${freeAccessToVideoClassName}`}>Free access to video class</p>
        </div>
        <div className="frame-4">
          <img className="vector" alt="Vector" src={img} />
          <p className={`free-access-to-video ${freeAccessToVideoClassNameOverride}`}>Free access to video class</p>
        </div>
        <div className="frame-4">
          <img className="vector" alt="Vector" src={vector1} />
          <p className={`free-access-to-video ${pClassName}`}>Free access to video class</p>
        </div>
      </div>
      <div className={`start-free-trial-wrapper ${frameClassName}`}>
        <div className="start-free-trial">Start Free Trial</div>
      </div>
    </div>
  );
};

Plan.propTypes = {
  text: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
};
