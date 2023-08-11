import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import SubHeader from "./SubHeader";
import HomeSlider from "./HomeSlider";
import Cart from "./Cart";
import LogIN from "./LogIN";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"


const promise = loadStripe('pk_test_51Nb3u7SGEC0339U9C82LMc7A3kwHOV2aD00idrp9N01rerRRfLYkJRTHpWnHP8sS6IhrNP3XenBtk4uPv650lt5r00yADcNCw1');

function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is", authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user:authUser,
       })
      } else {
        dispatch({
          type: 'SET_USER',
          user:null,
       })
      }
    })
  },[]);

  const Slides = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/CML/Dashboardcard/Rev/pdpc1._CB601157716_.jpg",
      title: "Fashion1",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/1500x600_Highway-Love_V5._CB603521096_.jpg",
      title: "Fashion2",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/MFD/MFD-July-hero-PCskin._CB600958145_.jpg",
      title: "Fashion3",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/July_Bedsheets_Desk_3000x1200_Unrec._CB601155232_.jpg",
      title: "Fashion4",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg",
      title: "Fashion5",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg",
      title: "Fashion6",
    },
  ];

  return (
    <div className="relative">
      <Routes>
      <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders/>
              
            </>
          }
        />
        <Route path="/Login" element={<LogIN />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <SubHeader />
              <div className="w-full h-[100vh] mt-[7.2rem]   m-[0px]  p-0 overflow-x-hidden ">
                <HomeSlider Slider={Slides} />
              </div>
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <>
              <Header />
              <SubHeader />
              <Cart />
            </>
          }
        />
         <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
              <Payment/>
              </Elements>
           
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
