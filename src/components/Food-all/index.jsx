import React from 'react';
import './style.css'
import Brown from "../Image-container/brown.png";
import Star from "../Image-container/star.png";
import Yellow from "../Image-container/yellow.png";

export const MenuList = [
  {
    image: Brown,
    name: 'Chicken Burger',
    order: 'Order Now',
  },
  {
    image: Star,
    name: 'Chicken Pizza',
    order: 'Order Now',
  },
  {
    image: Yellow,
    name: 'French Fries',
    order: 'Order Now',
  },
];

const Allmenu = () => {
  return (
    <div className="productes ">
      {MenuList.map((item, index) => (
        <div key={index} className="productkeys">
          <img src={item.image} alt={item.name} className="productimages" />
          <p className="productprice">{item.name}</p>
          <p className="productdiscount">{item.order}</p>
        </div>
      ))}
    </div>
  );
};

export default Allmenu;