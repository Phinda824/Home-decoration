import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logoIcon from "/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="card">
          <div className="text_header">
            <div className="logo_img">
              <img src={logoIcon} alt="" />
            </div>
          </div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At iste
            exercitationem ducimus error unde excepturi accusamus, distinctio
            quae repellat explicabo.
          </div>
        </div>
        <div className="card">
          <div className="text_header">
            <h1>Useful Links</h1>
          </div>
          <ul className="infor">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="text_header">
            <h1>Contacts</h1>
          </div>
          <ul className="infor">
            <li className="contact">
              <i class="fa-solid fa-location-dot"></i>
              <p>123 BetterLife, Phillipi, Cape Town</p>
            </li>
            <li className="contact">
              <i class="fa-solid fa-phone"></i>
              <p>063 211 6340</p>
            </li>
            <li className="contact">
              <i class="fa-regular fa-envelope"></i>
              <p>simanga824@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        @ Copyright 2024 developed by Simanga Phinda. All right reseverd
      </div>
    </footer>
  );
};

export default Footer;
