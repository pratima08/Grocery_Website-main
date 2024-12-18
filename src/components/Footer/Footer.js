import React from "react";
import {
  FaTelegramPlane,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaTumblr,
  FaWordpress,
  FaLinkedin,
  FaWhatsapp, // Add this if you're using WhatsApp icon
  FaInstagram // Add this if you're using Instagram icon
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Subscription Section */}
      <div className="newsletter">
        <FaTelegramPlane className="newsletter-icon" />
        <span>Sign Up to Newsletter</span>
        <span className="highlight">
          ...and receive Rs. 20 coupon for first shopping
        </span>
        <div className="newsletter-input">
          <input type="email" placeholder="Your E-mail" />
          <button>SUBMIT</button>
        </div>
      </div>

      {/* Links and Information Section */}
      <div className="footer-content">
        <div className="footer-links">
          {/* Add your link groups here if needed */}
        </div>

        {/* Quality Section */}
        <div className="quality-section">
          <h4>Don't compromise on quality!</h4>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters. On the other hand, we denounce with
            righteous indignation ...
          </p>

          {/* Social Icons with Links for WhatsApp and Instagram */}
          <div className="social-icons">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/919893358946" // Replace with your WhatsApp number in international format
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/rajumamta2605?igsh=MWdwemk4aG96YTRlYw==" // Replace with your Instagram handle
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <p>Need help? Call now!</p>
            {/* Clickable phone number */}
            <a href="tel:+919893358946" className="phone-number">
              +91 9893358946
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>@ Created By Pratima Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;
