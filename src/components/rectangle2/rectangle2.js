import React from "react";
import "./rectangle2.css";
import clockIcon from "assets/clock.svg";
import rightArrow from "assets/rightArrow.svg";
import vanIcon from "assets/van.svg";
import bellIcon from "assets/bell.svg";
import shareIcon from "assets/share.svg";
import jeans from "assets/jeans.svg";
import jeans2 from "assets/jeans2.svg";
import jeans3 from "assets/jeans3.svg";

const rectangle2 = () => {
  return (
    <div>
      <div className="rect2-container mx-auto">
        <div className="box">
          <div className="options">
            <span>
              <img src={clockIcon} alt="" />
            </span>
            <span id="box-text"> Reschedule the Delivery</span>
            <span className="fr" id="more">
              <img src={rightArrow} alt="more" />
            </span>
          </div>
        </div>
        <div className="bar"></div>
        <div className="box">
          <div className="options">
            <span>
              <img src={vanIcon} alt="" />
            </span>
            <span id="box-text"> Pick up from the last Hub / Courier</span>
            <span className="fr" id="more">
              <img src={rightArrow} alt="more" />
            </span>
          </div>
        </div>
        <div className="bar"></div>
        <div className="box">
          <div className="options">
            <span>
              <img src={bellIcon} alt="" />
            </span>
            <span id="box-text"> Get delivery updates</span>
            <span className="fr" id="more">
              <img src={rightArrow} alt="more" />
            </span>
          </div>
        </div>
        <div className="bar"></div>

        <div className="box2">
          <div className="inner">
            <div style={{ fontSize: "13px", fontWeight: "600" }}>
              Order Details
            </div>
            <span className="share-btn">
              <img src={shareIcon} alt="share" />
              <span style={{ paddingLeft: "3px" }}> Share this Product </span>
            </span>

            <div className="product">
              <div className="image">
                <img src={jeans} alt="jeans" />
              </div>
              <div className="details inline-block">
                <div style={{ fontSize: "12px", fontWeight: "600" }}>
                  Pepe Jeans
                </div>
                <div style={{ opacity: "50%", paddingTop: "5px" }}>
                  Men Blue Skinny Fit Mid-Rise Clean... <br /> Size: 30 | Qty: 1
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    paddingTop: "8px",
                  }}
                >
                  ₹5,845
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bar"></div>
        <div className="box3">
          <div className="featured">
            <span style={{ fontSize: "13px", fontWeight: "600" }}>
              You may also like
            </span>
            <div className="products">
              <div className="product1">
                <div className="image2">
                  <img src={jeans2} alt="product1" />
                </div>
                <div className="information">
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      paddingTop: "5px",
                    }}
                  >
                    Pepe jeans
                  </div>
                  <div
                    style={{
                      paddingTop: "5px",
                      fontSize: "10px",
                      opacity: "50%",
                    }}
                  >
                    Solid Slim Fit Polo T-shirt
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    paddingTop: "8px",
                  }}
                >
                  ₹5,845
                </div>
              </div>
              <div className="product2">
                <div className="image2">
                  <img src={jeans3} alt="product1" />
                </div>
                <div className="information">
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      paddingTop: "5px",
                    }}
                  >
                    Pepe jeans
                  </div>
                  <div
                    style={{
                      paddingTop: "5px",
                      fontSize: "10px",
                      opacity: "50%",
                    }}
                  >
                    Solid Slim Fit Polo T-shirt
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    paddingTop: "8px",
                  }}
                >
                  ₹5,845
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default rectangle2;
