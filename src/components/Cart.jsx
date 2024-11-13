import React from "react";

const Cart = ({ cart }) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = cart;
  return (
    <div className="flex items-center justify-around py-6">
      <div className="flex items-center gap-4">
        <img className="w-44 h-32 rounded-xl" src={product_image} alt="" />
        <div>
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <p className="text-gray-500">{description}</p>
          <p className="font-bold">Prirce: ${price}</p>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default Cart;
