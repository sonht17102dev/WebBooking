import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Header.css";
import { format } from "date-fns";
const Header = (props) => {
  const searchHandler = () => {
    window.location.replace("/search");
  };
  // Ẩn hiện calendar khi click vào ô chọn ngày
  const [openDate, setOpenDate] = useState(false);

  const openCalendar = () => {
    setOpenDate(!openDate);
  };

  // State sử dụng trong daterange
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="header container">
      <div className="header-content mb-4">
        <h1>A lifetime of discount? It's Genius.</h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="btn btn-primary">Sign in/ Register</button>
      </div>
      <div className="header-form-search container">
        <form className="form-group form-input row justify-content-center align-items-center text-center">
          <div className="form-input col-lg-4 ">
            <label>
              <i className="fa fa-bed text-dark"></i>
            </label>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="form-input col-lg-4">
            <label>
              <i className="fa fa-calendar text-dark"></i>
            </label>
            <input
              onClick={openCalendar}
              type="text"
              className="cursor-pointer text-dark text-center"
              placeholder={`${format(
                date[0].startDate,
                "MM/dd/yyy"
              )} to ${format(date[0].endDate, "MM/dd/yyy")}`}
              value={`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyy"
              )}`}
            />
            {/* Khi giá trị của openDate=true thì hiển thị dateRange */}
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="form-input col-lg-3">
            <label>
              <i className="fa fa-female text-dark"></i>
            </label>
            <span className="cursor-pointer text-dark">
              1 adult - 0 children - 1 room{" "}
            </span>
          </div>
          <div className="form-input col-lg-1">
            <button
              type="button"
              onClick={searchHandler}
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Header;
