import React from "react";
import City from "./City";
import Type from "./Type";
import HotelList from "./HotelList";
import Signup from "./Signup";
import "./BodyContent.css";
const BodyContent = (props) => {
  return (
    <>
      <div className="container">
        <City />
        <h3>Browse by property type</h3>
        <Type />
        <h3>Homes guests love</h3>
        <HotelList />
      </div>
      <div className="signup">
        <Signup />
      </div>
    </>
  );
};
export default BodyContent;
