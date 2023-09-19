import React from "react";
import "./Navbar.css";
import dataNavbar from "../../data/navBar.json";
import NavbarButton from "./NavbarButton";
import NavbarTop from "./NavbarTop";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav className="navbar container ">
      <NavbarTop />
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
