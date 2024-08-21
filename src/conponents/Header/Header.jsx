import React, { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

import user from "/images/User1.webp";
import logoIcon from "/images/logo.png";

const nav_links = [
  {
    path: "home",
    display: "home",
  },
  {
    path: "shop",
    display: "shop",
  },
  {
    path: "cart",
    display: "cart",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show_profileActions");

  return (
    <div className="navbar">
      <div className="top_nav">
        <div className="logo_img">
          <Link to="/home">
            <img src={logoIcon} alt="" />
          </Link>
        </div>

        <div className="rigth_side">
          <div className="login_cont">
            <div className="nav_login">
              <img
                src={currentUser ? currentUser.photoURL : user}
                alt=""
                onClick={toggleProfileActions}
              />
            </div>
            <div
              className="profile_action"
              ref={profileActionRef}
              onClick={toggleProfileActions}
            >
              {currentUser ? (
                <p onClick={logout}>Sign out</p>
              ) : (
                <div className="sign">
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div>
          </div>
          <div className="nav_icons">
            <span className="fav_icon">
              <i class="fa-regular fa-heart"></i>
              <span className="count">0</span>
            </span>
            <span className="cart_icon" onClick={navigateToCart}>
              <i class="fa-solid fa-bag-shopping"></i>
              <span className="count">{totalQuantity}</span>
            </span>
          </div>

          <div className="menu_icon">
            <span onClick={menuToggle}>
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </div>

      <ul className="menu" ref={menuRef} onClick={menuToggle}>
        {nav_links.map((item, index) => (
          <li className="nav_item" key={index}>
            <NavLink
              to={item.path}
              className={(navClass) => (navClass.isActive ? "nav_active" : "")}
            >
              {item.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
