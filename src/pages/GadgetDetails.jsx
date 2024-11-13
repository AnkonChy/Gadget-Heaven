import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreCartList, addToStoreWishList } from "../utility/addToLocal";
import DetailsBanner from "../components/DetailsBanner";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import Rating from "react-rating";
const GadgetDetails = () => {
  const data = useLoaderData();

  const { gadgetId } = useParams();

  const gadget = data.find(
    (gadget) => gadget.product_id === parseInt(gadgetId)
  );

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;

  //handleAddToCard
  const handleAddToCard = (id) => {
    addToStoreCartList(id);
  };

  //handle wish list
  const handleWish = (id) => {
    addToStoreWishList(id);
  };

  return (
    // banner
    <div className="">
      <DetailsBanner></DetailsBanner>
      <div className="w-11/12 mx-auto relative">
        <div className="flex justify-between items-center gap-3 lg:w-3/5 border border-emerald-800 absolute -top-60 left-[280px] bg-violet-100 rounded-xl">
          <div className="p-5">
            <img className="rounded-xl" src={product_image} alt="" />
          </div>
          <div className="p-6 space-y-2">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
              {product_title}
            </h1>
            <p className="text-xs md:text-sm lg:text-base font-medium">
              Price:$ {price}
            </p>
            <button className="px-2 py-1 rounded-2xl border border-green-300 bg-green-100 text-green-800 font-medium text-xs">
              {availability ? "In Stock" : "Stock Out"}
            </button>
            <p className="text-gray-600 text-base font-medium">{description}</p>
            <h3 className="text-base md:text-lg lg:text-xl font-bold">
              Specification:
            </h3>
            {specification.map((spec, index) => (
              <ul className="text-sm font-medium list-disc ml-6" key={index}>
                <li>{spec}</li>
              </ul>
            ))}
            <h3 className="text-base md:text-lg lg:text-xl font-bold">
              Rating
            </h3>
            <div className="flex items-center gap-4">
              <div>
                <Rating
                  initialRating={rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  className="text-green-500"
                  readonly
                ></Rating>
              </div>
              <div>
                <p className="font-medium">{rating}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleAddToCard(product_id)}
                className="flex items-center gap-2 px-4 py-2 font-bold bg-violet-600 rounded-3xl text-white"
              >
                Add To Cart
                <i className="fa-solid text-white fa-cart-shopping text-lg"></i>
              </button>

              <button
                onClick={() => handleWish(product_id)}
                className=" w-10 h-10 rounded-full  border border-black"
              >
                <i className="text-2xl fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
