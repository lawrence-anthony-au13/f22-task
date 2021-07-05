import React from "react";
import image from "../images/b-1.png";
import image2 from "../images/tick.png";
import { Button } from "react-bootstrap";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="pt-5"></div>
      <div className="product-box row">
        <div className="col-xs-4 col-sm-6 col-xl-5 col-lg-4">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="col-xs-8 col-sm-6 col-xl-7 col-lg-8">
          <div>
            <div className="pt-5"></div>
            <div className="Solve-your-daily-lif">
              Solve your daily life problems in 1 minute.
            </div>
            <ul className="product-lines">
              <li>
                <img className="Oval" src={image2} alt="" />
                12 Chapter with detail illustrations
              </li>
              <li>
                <img className="Oval" src={image2} alt="" />
                Learn from the expert with 24 years experience
              </li>
              <li>
                <img className="Oval" src={image2} alt="" />
                Audio version is included with the purchase
              </li>
            </ul>
            <div className="pt-5"></div>
            <Button variant="danger">Get this book-Starts from $29</Button>
            <div>
              <b>
                Interested in a free chapter?<a href="#home"> Get it now</a>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
