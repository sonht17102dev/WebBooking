import React from "react";
import "./BodySearch.css";

const SearchForm = (props) => {
  return (
    <div className="col-lg-4 search-form">
      <h3 className="my-3 fs-3">Search</h3>
      <form className="form-group">
        <div className="form-control form-items fs-4">
          <div class="mb-3">
            <label for="destination" class="form-label">
              Destination
            </label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="form-control form-items fs-4">
          <div class="mb-3">
            <label for="check-in" class="form-label">
              Check-in Date
            </label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="form-control form-items fs-5">
          <p>Options</p>
          <div class="mb-3 row">
            <label for="min" class="col-sm-8 col-form-label">
              Min price per night
            </label>
            <div class="col-sm-4">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="max" class="col-sm-8 col-form-label">
              Max price per night
            </label>
            <div class="col-sm-4">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="adult" class="col-sm-8 col-form-label">
              Adult
            </label>
            <div class="col-sm-4">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="children" class="col-sm-8 col-form-label">
              Children
            </label>
            <div class="col-sm-4">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="room" class="col-sm-8 col-form-label">
              Room
            </label>
            <div class="col-sm-4">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="mb-3 d-flex justify-content-center ">
            <button type="submit" className="btn btn-primary col-sm-10 w-100">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchForm;
