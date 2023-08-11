import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

function LogIN() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        // Handle the error if user creation fails
        alert(error.message);
      });
  };

  const Register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
        // User created successfully, you can access userCredential.user for the new user
        // console.log(userCredential);
      })
      .catch((error) => {
        // Handle the error if user creation fails
        alert(error.message);
      });
  };

  useEffect(() => {
    // Save the current body background color when the component mounts
    const originalBodyColor = document.body.style.backgroundColor;

    // Set the body background color to what you want in this component
    document.body.style.backgroundColor = "#ffffff"; // Replace with your desired body color

    // Restore the original body background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBodyColor;
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className=" mt-[1rem]">
        <Link to="/">
          <img
            className="text-black  lg:object-contain w-[8rem] lg:w-[8rem] md:w-[8rem]"
            src="https://pngimg.com/uploads/amazon/small/amazon_PNG1.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="w-[300px] h-fit flex flex-col rounded-lg border-[1px] border-[#c1c0c0] p-5 mt-[1rem]">
        <h1 className="font-bold text-2xl mb-[20px]">Sign-in</h1>
        <form action="">
        <h6 className="mb-[5px] font-[500]">Name</h6>
          <input
            className="h-[30px] mb-[10px] bg-white w-[100%] outline-none border-[1px] border-[#a19f9f] rounded-[0.3rem]  p-2"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h6 className="mb-[5px] font-[500]">E-mail</h6>
          <input
            className="h-[30px] mb-[10px] bg-white w-[100%] outline-none border-[1px] border-[#a19f9f] rounded-[0.3rem]  p-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6 className="mb-[5px] font-[500]">Password</h6>
          <input
            className="h-[30px] mb-[10px] bg-white w-[100%] outline-none border-[1px] border-[#a19f9f] rounded-[0.3rem] p-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-yellow-500 rounded-lg w-[100%] h-[30px] mt-[10px] border-1 border-yellow-600"
            onClick={SignIn}
          >
            Sign In
          </button>
        </form>
        <p className="mt-[15px] text-[12px]  ">
          By continuing, you agree to the Conditions of Amazon of Use and
          Privacy Notice.
        </p>
        <button
          onClick={Register}
          className=" rounded-lg w-[100%]  mt-[15px] p-1 border-[1px] border-[#c1c0c0] font-[400] text-[0.9rem] shadow-sm shadow-slate-500"
        >
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LogIN;
