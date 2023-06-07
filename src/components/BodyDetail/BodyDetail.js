import React from "react";
import dataDetail from "../../data/detail.json";
import "./BodyDetail.css";

const BodyDetail = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <h2 className="detail-name">{dataDetail.name}</h2>
          <p>
            <i className="fa fa-map-marker"></i>
            <small>{dataDetail.address}</small>
          </p>
        </div>
        <div className="col-lg-6 text-end">
          <button type="button" className="btn btn-primary">
            Reserve or Book Now!
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <p className="detail-distance">{dataDetail.distance}</p>
          <p className="detail-price">{dataDetail.price}</p>
        </div>
        {dataDetail.photos.map((img) => {
          return (
            <div className="col-lg-4 g-2">
              <img src={img} style={{ width: "100%" }} />
            </div>
          );
        })}
        <div className="row mt-4 align-items-center">
          <div className="col-lg-9">
            <h2 className="pb-3">{dataDetail.title}</h2>
            <p>{dataDetail.description}</p>
          </div>
          <div className="col-lg-3 cart">
            <h4>Perfect for a 9-night stay!</h4>
            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <h5>
              <strong>${dataDetail.nine_night_price}</strong> (9 nights)
            </h5>
            <button type="button" className="btn btn-primary">
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDetail;
