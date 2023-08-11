import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("This is the basket",basket)

  const addToBasket = () => {
    // Dispatch item into data Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    // <div className=" ">
    <div className=" bg-white w-80 lg:w-80 md:w-80  p-3 ">
      <div className="text-sm">
        <p className="">{title}</p>
        <p className="mt-[3px]">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <div className="grid place-content-center gap-3 mt-2">
        <div className=" ">
        <img className=" object-contain h-[150px] w-[160px]" src={image} alt="" />
        </div>
       

        <button
          className="bg-yellow-500 rounded-lg p-[0.3rem]  max-w-[14rem] text-sm  "
          onClick={addToBasket}
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
