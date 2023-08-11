import React, { useEffect, useState, useRef, useCallback } from "react";
//  import "./App.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Product from "./Product";
import ProductSlider from "./ProductSlider";

function HomeSlider({ Slider }) {
  const timeRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const [slidIndex, setSlidIndex] = useState(0);

  const gotoPrevious = () => {
    const isFirstSlid = slidIndex === 0;
    const newIndex = isFirstSlid ? Slider.length - 1 : slidIndex - 1;
    setSlidIndex(newIndex);
  };
  const gotoNext = useCallback(() => {
    const isLastSlid = slidIndex === Slider.length - 1;
    const newIndex = isLastSlid ? 0 : slidIndex + 1;
    setSlidIndex(newIndex);
  }, [slidIndex, Slider]);

  const ScrollPrev1 = () => {
    let width1 = box1Ref.current.clientWidth;
    box1Ref.current.scrollLeft = box1Ref.current.scrollLeft - width1;
    console.log(width1);
  };

  const ScrollNext1 = () => {
    let productWidth = box1Ref.current.children[0].clientWidth; // Assuming all products have the same width
    let scrollDistance = productWidth * 2; // Scroll by the width of 2 products
    box1Ref.current.scrollLeft += scrollDistance;
  };

  const ScrollPrev2 = () => {
    let width2 = box2Ref.current.clientWidth;
    box2Ref.current.scrollLeft = box2Ref.current.scrollLeft - width2;
    console.log(width2);
  };

  const ScrollNext2 = () => {
    let productWidth = box2Ref.current.children[0].clientWidth; // Assuming all products have the same width
    let scrollDistance = productWidth * 2; // Scroll by the width of 2 products
    box2Ref.current.scrollLeft += scrollDistance;
  };

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      gotoNext();
    }, 4000);
    return () => clearTimeout(timeRef.current);
  }, [gotoNext]);

  return (
    <div className="  h-full max-w-[100%]   ">
      <div className="  h-full max-w-[100%] relative overflow-x-hidden ">
        <div
          className="absolute top-[8rem]  left-10 pointer z-10  hover:border-2 border-white p-1 cursor-pointer"
          onClick={gotoPrevious}
        >
          <NavigateBeforeIcon />
        </div>
        <div
          className="absolute top-[8rem] right-10 z-10 hover:border-2 border-white p-1 cursor-pointer "
          onClick={gotoNext}
        >
          <NavigateNextIcon className="" />
        </div>
        <div
          className=" relative object-cover max-w-full  h-full bg-cover bg-center  duration-1000  
         "
          style={{
            backgroundImage: `url(${Slider[slidIndex].url})`,
            opacity: 1,
          }}
        ></div>
      </div>

      <div className="absolute top-[50%] flex   flex-col gap-2  w-[99.7%] h-auto   p-2">

        <div className="  flex justify-center items-center flex-wrap gap-2  w-[100%]  ">
          <Product
            id="123"
            title="Yashika Women's Banarasi Cotton Silk Jacquard Saree With Blouse Piece"
            price={900}
            image="https://m.media-amazon.com/images/I/61UYqTRWFPL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="124"
            title="OnePlus Nord 3 5G (Misty Green, 8GB RAM, 128GB Storage)"
            price={4700}
            image="https://m.media-amazon.com/images/I/41qctkvrCdL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="125"
            title="beatXP Marv Neo 1.85” (4.6 cm) Display, Bluetooth Calling Smart Watch"
            price={5000}
            image="https://m.media-amazon.com/images/I/61eq73o4VaL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="126"
            title="Fogg Amber Extreme Perfume, Long-Lasting Perfume, Eau De Parfum "
            price={9000}
            image="https://m.media-amazon.com/images/I/81lopCM7E-L._AC_SY200_.jpg"
            rating={5}
          />
           <Product
            id="127"
            title="Yashika Women's Banarasi Cotton Silk Jacquard Saree With Blouse Piece"
            price={900}
            image="https://m.media-amazon.com/images/I/61Ngad1CGYL._AC_UL400_.jpg"
            rating={5}
          />
          <Product
            id="128"
            title="OnePlus Nord 3 5G (Misty Green, 8GB RAM, 128GB Storage)"
            price={4700}
            image="https://m.media-amazon.com/images/I/818wQu5moBL._AC_UL400_.jpg"
            rating={5}
          />
          <Product
            id="129"
            title="BeatXP Marv Neo 1.85” (4.6 cm) Display, Bluetooth Calling Smart Watch"
            price={5000}
            image="https://m.media-amazon.com/images/I/71Y-i-Ax5YL._AC_UL400_.jpg"
            rating={5}
          />
          <Product
            id="1210"
            title="Fogg Amber Extreme Perfume, Long-Lasting Perfume, Eau De Parfum "
            price={9000}
            image="https://m.media-amazon.com/images/I/71WWrcpTciL._AC_UL400_.jpg"
            rating={5}
          />
        </div>
      
        <div className="mainDiv1  relative bg-white p-8   ml-3 mr-3 ">
          <div className="font-bold text-xl">
            <h1>Today's Hot Deals</h1>
          </div>
          <div
            className="flex gap-2 overflow-hidden scroll-smooth"
            ref={box1Ref}
          >
            <ProductSlider
              id="1122"
              image="https://m.media-amazon.com/images/I/71DSxfKzkJL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1123"
              image="https://m.media-amazon.com/images/I/81YEyQqHjPL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1124"
              image="https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1125"
              image="https://m.media-amazon.com/images/I/81SvInWFWWL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1126"
              image="https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1127"
              image="https://m.media-amazon.com/images/I/819bwF7gjfL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1128"
              image="https://m.media-amazon.com/images/I/91fonhAtoAL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1145"
              image="https://m.media-amazon.com/images/I/814ePfNubRL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1146"
              image="https://m.media-amazon.com/images/I/81L9MMAR+wL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1147"
              image="https://m.media-amazon.com/images/I/81XElaweeZL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1148"
              image="https://m.media-amazon.com/images/I/91cFxYoou8L._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1149"
              image="https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1150"
              image="https://m.media-amazon.com/images/I/61cwywLZR-L._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1151"
              image="https://m.media-amazon.com/images/I/611rQWZa5rL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1152"
              image="https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_SY200_.jpg"
            />
            <ProductSlider
              id="1153"
              image="https://m.media-amazon.com/images/I/71DSxfKzkJL._AC_SY200_.jpg"
            />
          </div>
          <div className="flex justify-center items-center absolute cursor-pointer w-[50px] rounded-lg left-0 top-[30%] bg-white shadow-md shadow-slate-500 h-[35%] ">
            <NavigateBeforeIcon
              style={{ fontSize: 70 }}
              className="text-gray-400"
              onClick={ScrollPrev1}
            />
          </div>
          <div className="flex justify-center items-center absolute cursor-pointer w-[50px] rounded-lg right-[2px] top-[30%] bg-white shadow-md shadow-slate-500 h-[35%]">
            <NavigateNextIcon
              style={{ fontSize: 70 }}
              className="text-gray-400"
              onClick={ScrollNext1}
            />
          </div>
        </div>
        <div className="mainDiv2 relative bg-white p-8 ml-3 mr-3">
          <div className="font-bold text-xl">
            <h1>Today's Hot Deals</h1>
          </div>
          <div
            className="flex gap-5 overflow-hidden scroll-smooth"
            ref={box2Ref}
          >
            <ProductSlider
              id="1129"
              image="https://m.media-amazon.com/images/I/51SiNnl24tL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1130"
              image="https://m.media-amazon.com/images/I/418TfS2TB8L._AC_SR160,160_.jpg"
            />
            <ProductSlider
              id="1131"
              image="https://m.media-amazon.com/images/I/4192fxDPWqL._AC_SR160,160_.jpg"
            />
            <ProductSlider
              id="1132"
              image="https://m.media-amazon.com/images/I/51VjbVzIm4L._UY500_.jpg"
            />
            <ProductSlider
              id="1133"
              image="https://m.media-amazon.com/images/I/51F35B6SOZL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1134"
              image="https://m.media-amazon.com/images/I/7120Pj49avL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1135"
              image="https://m.media-amazon.com/images/I/419ZcmLlIdL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1136"
              image="https://m.media-amazon.com/images/I/31PImYFR3yL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1137"
              image="https://m.media-amazon.com/images/I/61Ngad1CGYL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1138"
              image="https://m.media-amazon.com/images/I/814hYZyYzyL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1139"
              image="https://m.media-amazon.com/images/I/71qTvtBbdcL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1140"
              image="https://m.media-amazon.com/images/I/41Swlre4ZuL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1141"
              image="https://m.media-amazon.com/images/I/61iY1ek40nL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1142"
              image="https://m.media-amazon.com/images/I/61C8E7SLfkL._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1143"
              image="https://m.media-amazon.com/images/I/51AMQ0y-38L._AC_UL400_.jpg"
            />
            <ProductSlider
              id="1144"
              image="https://m.media-amazon.com/images/I/71HVhkiEwiL._AC_UL400_.jpg"
            />
          </div>
          <div className="flex justify-center items-center absolute cursor-pointer w-[50px] rounded-lg left-0 top-[30%] bg-white shadow-md shadow-slate-500 h-[35%]">
            <NavigateBeforeIcon
              style={{ fontSize: 70 }}
              className="text-gray-400 "
              onClick={ScrollPrev2}
            />
          </div>
          <div className="flex justify-center items-center absolute cursor-pointer w-[50px] rounded-lg right-[2px] top-[30%] bg-white shadow-md shadow-slate-500 h-[35%]">
            <NavigateNextIcon
              style={{ fontSize: 70 }}
              className="text-gray-400"
              onClick={ScrollNext2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
