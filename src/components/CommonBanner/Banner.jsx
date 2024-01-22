import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <div className="singal_product">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 ">
            <div className="text-center singal_product">
              <h1>{props.val}</h1>
              <h5>
                <Link to="/">Home</Link> <span> // {props.val}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
