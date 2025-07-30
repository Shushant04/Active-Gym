import React from "react";
import "./Footer.css";
import logo from "../../assets/dumble.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          {/* Logo and Tagline */}
          <div className="footer_box">
            <div className="logo">
              <img src={logo} alt="FitBody Logo" className="logo_img" />
              <h2 className="brand_name">FitBody</h2>
            </div>
            <p className="tagline">
              Every day you train, you get a little stronger. It’s about gradual
              improvement. 
            </p>
          </div>

          {/* Company Links */}
          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li><a href="#">Our Program</a></li>
              <li><a href="#">Our Plan</a></li>
              <li><a href="#">Become a Member</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;