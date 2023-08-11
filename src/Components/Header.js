import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();
 
  const shortEmail = user && user.email ? user.email.slice(0, 5) + '...' : 'No Email';


  const handleUserAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <div>
      <div className="flex gap-2 items-center bg-black text-white p-3 w-full fixed top-0 z-30">
        <div className="ml-2 sm:ml-7 hover:border-2 border-white p-2">
          <Link to="/">
            <img
              className="w-16 sm:w-21 h-6 sm:h-8"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center border-2 rounded-lg hover:border-amber-500 ml-3 flex-1">
          <input
            className="flex flex-1 outline-0 text-black rounded-l-lg p-1 w-full sm:w-auto"
            type="text"
            placeholder="Search"
          />
          <div className="bg-amber-500 text-black rounded-r-lg p-1">
            <SearchIcon />
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-2  mt-2 sm:mt-0 sm:ml-auto sm:mr-4">
        <Link to={!user && "/Login"}>
            <div onClick={handleUserAuthentication} className="flex flex-col hover:border-2 border-white p-1">
              <span className="text-xs sm:text-[10px]">Hello {user ? shortEmail : 'Guest'}</span>
              <span className="text-sm sm:text-[13px] font-bold">{user ? 'Sign Out':'Sign In'}</span>
            </div>
        </Link>
            
          <div className="flex flex-col hover:border-2 border-white p-1">
            <span className="text-xs sm:text-[10px]">Return</span>
            <span className="text-sm sm:text-[13px] font-bold">& Order</span>
          </div>

          <div className="flex flex-col  hover:border-2 border-white p-1">
            <span className="text-xs sm:text-[10px]">Your</span>
            <span className="text-sm sm:text-[13px] font-bold">Prime</span>
          </div>

          <div className="flex items-center">
            <Link to="/Cart">
              <ShoppingBasketIcon />
            </Link>
            <span className="ml-1 font-bold text-sm sm:text-[13px]">{basket?.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
