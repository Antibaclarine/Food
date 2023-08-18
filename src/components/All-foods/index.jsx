import React from 'react';
import './style.css'
import Circle from '../Image-container/circle.png';
import Circle1 from '../Image-container/circle1.png';
import Circle2 from '../Image-container/circle2.png';
import Circle3 from '../Image-container/circle3.png';
import Circle4 from '../Image-container/circle.png';
import Circle5 from '../Image-container/circle5.png';

const MenuList = [
  {
    image: Circle,
    name: 'Chicken Burger',
    order: 'Order Now',
  },
  {
    image: Circle1,
    name: 'Chicken Pizza',
    order: 'Order Now',
  },
  {
    image: Circle2,
    name: 'French Fries',
    order: 'Order Now',
  },
  {
    image: Circle3,
    name: 'French Fries',
    order: 'Order Now',
  },
  {
    image: Circle4,
    name: 'French Fries',
    order: 'Order Now',
  },
  {
    image: Circle5,
    name: 'French Fries',
    order: 'Order Now',
  },
];

const Manual = () => {
  return (
    <div className="product">
      <h1>Our <span>Regular</span> Menu</h1>
      <p>These Are Our Regular Menus. You Can<br />Order Anything You Like</p>
      <div className="product-container">
        {MenuList.map((item, index) => (
          <div key={index} className="product-item">
            <div className="product-image-container">
              <img src={item.image} alt={item.name} className="product-image" />
            </div>
            <div className="product-details">
              <p className="product-name">{item.name}</p>
              <p className="product-order">{item.order}</p>
              <span className="product-price">$4.80</span>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manual;