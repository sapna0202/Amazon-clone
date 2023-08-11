import React from "react";
import { useStateValue } from "./StateProvider";


function CartProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    // <div className=" ">
    <div className="flex bg-white border-b-2 w-[100%] p-3">
      <div className="   ">
        <img className="object-contain h-[230px] w-[160px]" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-start ml-2 p-1 ">
        <div className="  p-1">
          <p className="flex justify-start">{title}</p>
          <p className="flex justify-start">
            <small>Rs.</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="flex p-1">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div className="flex justify-start m-2">
          <button
            className=" bg-yellow-500 rounded-lg p-[0.3rem]  w-[14rem] text-sm "
            onClick={RemoveFromBasket}
          >
            Remove From Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
