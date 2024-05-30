import React from "react";
import "../../styles/layout/Footer.css"; // Assuming the CSS file is in the same directory

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Company Info (replace with your details) */}
        <div className="footer-info">
          <p>ProductSense</p>
          <p>Making product discovery fun and rewarding.</p>
          <a href="mailto:contact@productsense.com">contact@productsense.com</a>
        </div>

        {/* Social Media Links (replace with your links) */}
        <div className="social-links">
          <a href="https://www.facebook.com/">
            <i className="fa fa-facebook" aria-label="Facebook"></i>
          </a>
          <a href="https://www.twitter.com/">
            <i className="fa fa-twitter" aria-label="Twitter"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa fa-instagram" aria-label="Instagram"></i>
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} ProductSense. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
