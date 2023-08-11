import React from "react";
import { useStateValue } from "./StateProvider";

function SideProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasketFromSide = () => {
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
    <div className="flex w-full ">
      <div className=" p-2">
        <img className=" object-contain w-[200px] h-[100px]" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-start text-[0.7rem] pt-1 pl-1 ">
        <div className=" text-left">
          <p className="">{title}</p>
          <p className="">
            <small>Rs.</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="flex text-left text-[0.7rem]">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div className="text-left ">
          <button
           className="bg-yellow-500 rounded-lg p-[0.2rem]  text-[0.58rem]  " onClick={addToBasketFromSide}>
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideProduct;
