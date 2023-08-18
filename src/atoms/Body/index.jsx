import React from "react";
import './style.css';
import Shadow from "../../components/Image-container/shadow.png";
import Buy from "../../components/Image-container/buy.png"
const Body = () => {
  return (
    <>
      <div className="all">
        <div className="allfood">
          <h2 className="we">All Fast Food is Available at Foodle</h2>
          <p>We Are Just A click Away When You <br /> Crave For Delicious Fast Food</p>
          <img src={Buy} alt="image" className="productesimage" />
        </div>
        <div>
          <img src={Shadow} alt="image" className="productsimage" />
        </div>
      </div>
      <div className="fast">
        <div>
          <b>Fast Delivery</b>
          <p>The Food will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering</p>
        </div>
        <div>
          <b>Fast Delivery</b>
          <p>The Food will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering</p>
        </div>
        <div>
          <b>Fast Delivery</b>
          <p>The Food will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering</p>
        </div>
      </div>
      <div className="best">
        <div>
          <h2>
            Best 
            <span>Delivered</span>
            Categories
          </h2>
        </div>
        <div>
          <p>Here Are Some Of Our Best Distributed <br />Categories. If You Want You Can Order <br />From Here</p>
        </div>
      </div>
    </>
  );
};

export default Body;