import React from "react";
import dataFooter from "../../data/footer.json";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container ">
      <div className="footer mt-3">
        {dataFooter.map((item) => {
          return (
            <div className="footer-items" key={item.col_number}>
              <div className="footer-items__content">
                <div>
                  {item.col_values.map((itemContent) => {
                    return <a href="#">{itemContent}</a>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
