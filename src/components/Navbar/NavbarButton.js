import React, { useState } from "react";

const NavbarButton = (props) => {
  const [isActive, setIsActive] = useState(props.active);

  return (
    <div className="nav-button col-lg-2 ">
      <div
        className={`icon-content-nav text-center 
        ${isActive === true ? "active" : ""}`}
      >
        <i className={`fa ${props.icon} `}></i>
        <span>{props.type}</span>
      </div>
    </div>
  );
};
export default NavbarButton;
