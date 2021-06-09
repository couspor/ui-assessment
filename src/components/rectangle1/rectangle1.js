import React from "react";
import "./rectangle1.css";
import shareIcon from "assets/share.svg";
import infoIcon from "assets/info.svg";
import downArrow from "assets/downArrow.svg";

const rectangle1 = () => {
  return (
    <div>
      <div className="rect-container mx-auto">
        <div className="text-main">
          <div className="status">Your Order is in Transit</div>
          <div className="arrival border-box">Arriving on July</div>
          <div className="share">
            <span className="share-icon">
              <img src={shareIcon} alt="shareIcon" />
            </span>
            <span style={{ paddingLeft: "2px" }}> Share the link</span>
          </div>
          <div className="calendar">
            <div className="day">Monday</div>
            <div className="date">05</div>
          </div>
          <div className="ship">Shipped from Mumbai</div>
          <div className="info">
            <span>
              <img src={infoIcon} alt="infoIcon" />
            </span>
            <span style={{ paddingLeft: "2px" }}>
              {" "}
              Status of the package <img src={downArrow} alt="details" />
            </span>
          </div>
          <div className="btns">
            <button className="btn border-box">View Shipment Details</button>
            <button className="btn border-box" id="action">
              Take Action
            </button>
          </div>
        </div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default rectangle1;
