import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function SubHeader() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex justify-between bg-slate-800 p-1 w-[100%] mt-[72px] fixed top-0 left-0 right-0 z-30 ">
      <div className="flex gap-[0.8rem] justify-center font-bold text-white text-[0.8rem] lg:text-sm lg:gap-[0.6rem]  ">
        <div className="hover:border-2 border-white p-0 cursor-pointer lg:p-1">
          <MenuIcon />
          ALL
        </div>
        <div className="hover:border-2 border-white p-0 cursor-pointer lg:p-1   md:hidden max-[1326px]:block min-[1145px]:block max-[1146px]:hidden">
          Amazon miniTV
        </div>
        <div className="hover:border-2 border-white p-0 cursor-pointer hidden lg:p-1 lg:block">
          Sell
        </div>
        <div className="hover:border-2 border-white p-0 cursor-pointer lg:p-1 max-[1326px]:block min-[1145px]:block  max-[1146px]:hidden ">
          Best Sellers
        </div>
        <div className="hover:border-2 border-white p-0 cursor-pointer lg:p-1 hidden lg:block md:hidden">
          Today's Deal
        </div>
        <div className="hover:border-2 border-white p-0 cursor-pointer lg:p-1">
          Mobiles
        </div>
        <div className="hover:border-2 border-white p-0 cursor-pointer  lg:p-1 md:hidden max-[1326px]:block min-[1145px]:block max-[1146px]:hidden">
          Customer Service
        </div>
        <div className="hover:border-2 border-white p-0 cursor-pointer hidden lg:block lg:p-1 md:hidden  ">
          New Release
        </div>
        <div
          className="hover:border-2 border-white p-0 cursor-pointer lg:p-1"
          onClick={(e) => setIsActive(!isActive)}
        >
          Prime
          <ArrowDropDownIcon />
        </div>
        {isActive && (
          <div className="z-40 absolute top-[2.6rem] right-[27rem] max-w-[14rem] bg-white p-1">
            <div className=" ">
              <a href="">
                <img
                  src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB612889281_.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        )}
        <div className="hover:border-2 border-white p-0 cursor-pointer lg:p-1 block min-[300px]:hidden max-[550px]:hidden md:block">
          Electronics
        </div>
      </div>
      <div className=" mt-[-0.2rem] hover:border-2 border-white p-0 lg:p-1  ">
        <img
          className="h-8 min-[300px]:w-[15rem] max-[444px]:[15rem]  "
          src="https://m.media-amazon.com/images/G/31/IN-Events/PD23/GW/PD23_SWM_400x39._CB602292673_.jpg"
          alt="linkImage"
        />
      </div>
    </div>
  );
}

export default SubHeader;
