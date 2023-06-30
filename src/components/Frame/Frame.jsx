/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({
  className,
  frame = "https://generation-sessions.s3.amazonaws.com/ccf685f6f332414cf14b8399a40e501b/img/frame-20.svg",
  frameClassName,
}) => {
  return (
    <div className={`frame ${className}`}>
      <div className="div-2">
        <div className="div-3">
          <img
            className="lolla"
            alt="Lolla"
            src="https://generation-sessions.s3.amazonaws.com/ccf685f6f332414cf14b8399a40e501b/img/lolla-1-3@2x.png"
          />
          <div className="div-4">
            <div className="div-4">
              <div className="lolla-smith">Lolla Smith</div>
              <div className="microsoft">Microsoft</div>
            </div>
            <img className={`img ${frameClassName}`} alt="Frame" src={frame} />
          </div>
        </div>
        <p className="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </p>
      </div>
    </div>
  );
};

Frame.propTypes = {
  frame: PropTypes.string,
};
