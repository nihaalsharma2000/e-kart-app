import {
  AccessTime,
  AdjustOutlined,
  Call,
  Copyright,
  Email,
  PushPin,
} from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer-wrapper container">
        <div className="left-side-content-ftr">
          <div className="footerlogo">
            <Image
              src={"/elogo.png"}
              height={30}
              width={170}
              unoptimized
              alt="footerlogo"
            />
            <p>
              Pellentesque id rhoncus augue nec maximus enim nunc commodo purus
              sit
            </p>
            <div className="contact">
              <p>
                <PushPin /> London Eye, London, United Kingdom
              </p>
              <p>
                <Call /> 657 123-456
              </p>
              <p>
                <Email />
                contact@website.com
              </p>
              <p>
                <AccessTime /> Mon - Fri / 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
        <div className="right-side-content-ftr">
          <div className="info ftr-col">
            <h4>INFORMATION</h4>
            <ul>
              <li>
                <AdjustOutlined /> About us
              </li>
              <li>
                <AdjustOutlined /> Store location
              </li>
              <li>
                <AdjustOutlined /> contact us
              </li>
              <li>
                <AdjustOutlined /> shipping $ delevery
              </li>
              <li>
                <AdjustOutlined /> Latest news
              </li>
              <li>
                <AdjustOutlined /> Our sitemap
              </li>
            </ul>
          </div>
          <div className="service ftr-col">
            <h4>OUR SERVICE</h4>
            <ul>
              <li>
                <AdjustOutlined /> Privacy policy
              </li>
              <li>
                <AdjustOutlined /> Terms of state
              </li>
              <li>
                <AdjustOutlined /> Customer service
              </li>
              <li>
                <AdjustOutlined /> Delevery Information
              </li>
              <li>
                <AdjustOutlined /> Payments
              </li>
              <li>
                <AdjustOutlined /> Saved Card
              </li>
            </ul>
          </div>
          <div className="account ftr-col">
            <h4>MY ACCOUNT</h4>
            <ul>
              <li>
                <AdjustOutlined /> Sign in
              </li>
              <li>
                <AdjustOutlined /> Register
              </li>
              <li>
                <AdjustOutlined /> View Cart
              </li>
              <li>
                <AdjustOutlined /> My wishlist
              </li>
              <li>
                <AdjustOutlined /> Track My order
              </li>
              <li>
                <AdjustOutlined /> Help and support
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="copyright">
        <p><Copyright/>Copyright - BestPeers</p>
      </section>
    </>
  );
}

export default Footer;
