import React from "react";
import dataCity from "../../data/city.json";
const City = (props) => {
  return (
    <div className="row city mt-3 mb-2">
      {dataCity.map((city, i) => {
        return (
          <div className="col-lg-4 city-items" key={i}>
            <div className="city-items__img">
              <img src={city.image} title={city.name} />
              <div className="city-items__content">
                <h3>
                  {city.name}
                  <br />
                  {city.subText}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default City;
