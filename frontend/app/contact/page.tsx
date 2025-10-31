import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import "./page.css";
function page() {
  return (
    <div>
      <div className="contact-wrapper container">
        <div className="contact-image">
          <Image src={"/map.jpg"} alt="map" height={600} width={560} />
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact">
              <h1>Address</h1>
              <p>Riverside Building, County Hall, London SE1 7PB</p>
            </div>
            <div className="contact">
              <h1>Mobile</h1>
              <pre>
                (657) 123-456 <br />
                (555) 241-6874
              </pre>
            </div>
            <div className="contact">
              <h1>Email</h1>
              <p>contact@website.com</p>
            </div>
            <div className="contact social">
              <h1>Social</h1>
              <div className="icons">
                <Facebook />
                <Twitter />
                <YouTube />
                <Instagram />
              </div>
            </div>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Enter Your FirstName" />
            <input type="text" placeholder="Enter Your LastName" />
            <input type="email" placeholder="Enter Your Email Address" />
            <textarea placeholder="Enter comment"></textarea>
            <button className="contact">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
