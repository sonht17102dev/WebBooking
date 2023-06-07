import React from "react";
import "./Navbar.css";
import dataNavbar from "../../data/navBar.json";
import NavbarButton from "./NavbarButton";
const Navbar = (props) => {
  return (
    <nav className="navbar container">
      <div className="row mb-2 justify-content-between align-items-center">
        <div className="col-lg-6">
          <a href="/">
            <span>Booking Website</span>
          </a>
        </div>
        <div className="col-lg-6 row justify-content-right align-items-center ">
          <div className="col-lg-6"></div>
          <div className="col-lg-3">
            <a href="#" className="btn btn-primary">
              Register
            </a>
          </div>
          <div className="col-lg-3">
            <a href="#" className="btn btn-primary">
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-left align-items-center">
        {dataNavbar.map((itemsNav, index) => (
          <NavbarButton
            key={index}
            type={itemsNav.type}
            icon={itemsNav.icon}
            active={itemsNav.active}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
