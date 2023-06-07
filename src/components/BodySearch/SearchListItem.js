import React from "react";
import dataSearch from "../../data/search.json";
const SearchListItem = (props) => {
  const clickHandler = () => {
    window.location.replace("/detail");
  };

  return (
    <div className="col-lg-8 row hotel-list">
      {dataSearch.map((item) => {
        return (
          <div className="col-lg-12 row hotel-detail">
            <div className="col-lg-3">
              <img src={item.image_url} />
            </div>
            <div className="col-lg-6 ">
              <h3 className="hotel-name">{item.name}</h3>
              <p>{item.distance} from center</p>
              <p>
                <mark>{item.tag}</mark>
              </p>
              <p>
                <strong>{item.description}</strong>
              </p>
              <p>{item.type}</p>
              {item.free_cancel && (
                <p className="hotel-cancel">
                  <strong>Free cancellation</strong> <br />
                  You can cancel later, so lock in this great price today!
                </p>
              )}
            </div>
            <div className="col-lg-3 row align-items-start">
              <div className="col-lg-6">{item.rate_text}</div>
              <div className="col-lg-6 text-end rate">
                <mark>{item.rate}</mark>
              </div>
              <div className="col-lg-12">
                <h4 className="text-end">${item.price}</h4>
                <p className="text-end tax-fee">Includes taxess and fees</p>

                <button onClick={clickHandler} className="btn btn-primary">
                  See availability
                </button>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};
export default SearchListItem;
