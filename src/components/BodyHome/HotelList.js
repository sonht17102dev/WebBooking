import React from "react";
import dataHotel from "../../data/hotel_list.json";
const HotelList = (props) => {
  return (
    <div className="row hotel my-4">
      {dataHotel.map((hotel, i) => {
        return (
          <div className="col-lg-3 hotel-items" key={i}>
            <div className="hotel-items__img">
              <img src={hotel.image_url} title={hotel.name} />
              <div className="hotel-items__content">
                <p>
                  <a href="#">
                    <strong>
                      <u>{hotel.name}</u>
                    </strong>
                  </a>
                  <br />
                  {hotel.city}
                  <br />
                  <strong>Starting from ${hotel.price} </strong>
                  <br />
                  <mark>{hotel.rate}</mark> {hotel.type}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HotelList;
