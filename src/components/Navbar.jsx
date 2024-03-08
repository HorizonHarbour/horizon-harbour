import React, { useState } from "react";
import "./Navbar.css";

import logo from "../assets/images/horizon-harbour-logo-white.png";
import menu from "../assets/images/menu.svg";
import exit from "../assets/images/exit.svg";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="container test">
        <div className="header-logo-box">
          <a href="">
            <img className="logo" src={logo} alt="Horizon Harbour Logo" />
          </a>
        </div>
        <img
          className={`mobile-menu ${menuOpen ? "hidden" : ""}`}
          src={menu}
          alt="Open Navigation Bar Icon"
          onClick={toggleMenu}
        />

        <nav className={`main-nav ${menuOpen ? "menu-btn" : ""}`}>
          <img
            className={`mobile-menu-exit ${menuOpen ? "" : "hidden"}`}
            src={exit}
            alt="Close Navigation Bar Icon"
            onClick={toggleMenu}
          />
          <ul className="main-nav-list d-flex justify-content-between">
            <div className="d-flex gap-5 left-side-nav">
              <li>
                <a className="main-nav-link" href="">
                  Find Jobs
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="">
                  Browse Companies
                </a>
              </li>
            </div>

            <div className="d-flex align-content-center gap-3 right-side-nav">
              <button className="text-primary-color fw-bold border-0 bg-transparent custom-padding">
                Login
              </button>
              <div className="vertical-line"></div>
              <button className="text-white fw-bold bg-primary-color border-0 custom-padding">
                Sign up
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
