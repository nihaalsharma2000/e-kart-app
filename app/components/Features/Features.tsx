import {
    CreditCardOutlined,
  DiscountOutlined,
  HeadsetMicOutlined,
  LocalShippingOutlined,
  PaidOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Features.css";
function Features() {
  return (
    <div>
      <div className="features-wrapper container">
        <div className="feature-box shipping">
          <div className="feature-icon">
            <LocalShippingOutlined />
          </div>
          <div className="feature-text">
            <h3>Free Shipping</h3>
            <p>Free Shipping for all US order</p>
          </div>
        </div>
        <div className="feature-box support">
          <div className="feature-icon">
            <HeadsetMicOutlined />
          </div>
          <div className="feature-text">
            <h3>Support 24/7</h3>
            <p>We support 24h a day</p>
          </div>
        </div>
        <div className="feature-box moneyback">
          <div className="feature-icon">
            <PaidOutlined />
          </div>
          <div className="feature-text">
            <h3>100% Money Back</h3>
            <p>You have 14 days to Return</p>
          </div>
        </div>
         <div className="feature-box securepmt">
          <div className="feature-icon">
            <CreditCardOutlined />
          </div>
          <div className="feature-text">
            <h3>100% Money Back</h3>
            <p>You have 14 days to Return</p>
          </div>
        </div>
        <div className="feature-box securepmt">
          <div className="feature-icon">
            <DiscountOutlined />
          </div>
          <div className="feature-text">
            <h3>Discount</h3>
            <p>Up to 30% for member</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
