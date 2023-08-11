import React from "react";
// import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import "./App.css";
// import Product from "./Product";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CartProduct from "./CartProduct";
import SideProduct from "./SideProduct";


function Cart(props) {
  const [{ basket,user }, dispatch] = useStateValue();
 

  return (
    <div className="flex flex-col md:flex-row  w-full absolute top-[112px] " >
      <div className="flex flex-1 flex-col justify-start gap-3 h-fit p-4 bg-white m-3 stylep-5 w-full md:w-4/5 md:order-1">
        <div className="flex flex-col justify-start items-start p-3 border-b-2">
          <h5 className="text-green-900 font-bold uppercase">Hello!!  "{user ? user.email : 'Guest' }"</h5>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <a href="#">Deselect all items</a>
        </div>
        <div className="">
          {basket.map((item) => (
            <CartProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full md:w-1/4 h-1/2 m-3 text-center md:order-2">
        <div className="bg-white">
          <SubTotal />
        </div>
        <div className="flex flex-col gap-1 justify-center items-center bg-white p-2">
          <div className="text-base p-2 ">
            Products related to items in your cart
          </div>
          <div className="flex flex-col gap-2 p-2 ">
            <SideProduct
              id="111"
              title="Yashika Women's Banarasi Cotton Silk Jacquard Saree With Blouse Piece"
              price={900}
              image="https://images-eu.ssl-images-amazon.com/images/I/6143ffsDmHL._AC_UL200_SR200,200_.jpg"
              rating={5}
            />
             <SideProduct
               id="222"
               title="Yashika Women's Banarasi Cotton Silk Jacquard Saree With Blouse Piece"
               price={900}
               image="https://m.media-amazon.com/images/I/41FMV7m5bZL._SX300_SY300_QL70_FMwebp_.jpg"
               rating={5}
            />
             <SideProduct
               id="333"
               title="Yashika Women's Banarasi Cotton Silk Jacquard Saree With Blouse Piece"
               price={900}
               image="https://m.media-amazon.com/images/I/31fc1XrBpvL._AC_SR160,200_.jpg"
               rating={5}
            />
             <SideProduct
               id="444"
               title="Yashika Women's Banarasi Cotton Silk Jacquard Saree With Blouse Piece"
               price={900}
               image="https://m.media-amazon.com/images/I/31TxclAK5xL._AC_SR160,200_.jpg"
               rating={5}
            />
          </div>
        </div>
      </div>
    </div>
    
  );
}
  
export default Cart;
