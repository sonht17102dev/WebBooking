import React from "react";
import "./BodySearch.css";
import SearchForm from "./SearchForm";
import SearchList from "./SeachList";

const BodySearch = (props) => {
  return (
    <div className="container">
      <div className="row my-gap">
        <SearchForm />
        <SearchList />
      </div>
    </div>
  );
};

export default BodySearch;
