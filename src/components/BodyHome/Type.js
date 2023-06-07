import React from "react";
import dataType from "../../data/type.json";
const Type = (props) => {
  return (
    <div className=" type mt-3">
      {dataType.map((type, i) => {
        return (
          <div className="type-items" key={i}>
            <div className="type-items__img">
              <img src={type.image} title={type.name} />
            </div>
            <div className="type-items__content">
              <p>
                <strong>{type.name}</strong>
                <br />
                {type.count} hotels
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Type;
