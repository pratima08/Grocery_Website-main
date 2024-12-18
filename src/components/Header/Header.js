// Header.js
import React from "react";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { SocialLinks } from "../Sociallinks/Sociallinks.js"; // Adjust the path as needed
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        <p className="free-shipping">FREE SHIPPING FOR ALL ORDERS OF Rs.340</p>
        <div className="social-icons">
          <SocialLinks />
        </div>
        <p className="discount-offer">
          Get a 20% discount within 30 minutes—today only!
        </p>
      </div>

      {/* Main header section */}
      <div className="main-header">
        <div className="logo">
          <img src={logo} className="logoimg" alt="Company Logo" />
        </div>

        <div className="search-bar"></div>

        <div className="header-icons">
          <FaShoppingCart />
          <Link to="/">
            <FaHeart style={{ cursor: "pointer" }} />
          </Link>
          <Link to="/LoginRegister">
            <FaUser style={{ cursor: "pointer" }} />
          </Link>{" "}
          {/* Added cursor style for better UX */}
        </div>

        <div className="contact">
          <p>CALL ANYTIME</p>
          <p>+91 9893358946</p>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="navbar">
        <Link to="/categories" className="all-categories">
          ALL CATEGORIES
        </Link>
        <Link to="/Main" className="nav-link">
          HOME PAGES
        </Link>
        <Link to="/Shop" className="nav-link">
          SHOP
        </Link>
        <Link to="/AboutUs" className="nav-link">
          ABOUT US
        </Link>
        <Link to="/Contact" className="nav-link">
          CONTACT
        </Link>
        <Link to="/FAQ" className="nav-link">
          FAQ
        </Link>
        <Link to="/Blog" className="nav-link">
          BLOG
        </Link>
        <Link to="/Career" className="nav-link">
          CAREER
        </Link>
        <Link to="/Brand" className="nav-link">
          BRAND
        </Link>
        <Link to="/Cart" className="nav-link">
          CART
        </Link>
      </nav>
    </header>
  );
};

export default Header;