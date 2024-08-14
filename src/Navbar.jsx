import React, { useContext } from "react";
import { IoMdPin } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";

import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ecomContext } from "./App";




function Navbar() {
const {cart} = useContext(ecomContext);
  return (
    <>
      {/* parent div navbar */}
      <div className="w-screen">
        <div className="w-screen flex flex-wrap justify-evenly px-5 mb-5 mt-2 p-2">
          {/* amazon logo */}
          <Link to="/">
            {" "}
            <img
              src="logo.png"
              alt="amazon logo"
              className="h-30 w-60 sm:my-3"
              style={{ height: "5rem", width: "12rem" }}
            />
          </Link>
          {/* location */}
          <div className="flex flex-col items-center justify-center sm:my-3">
            <div className="flex items-center text-xl gap-2">
              <span>
                <IoMdPin />
              </span>
              <p>Delivering to Bulandshahr</p>
            </div>
            <p>Update location</p>
          </div>

          {/* search bar */}
          <div className="w-[55%] h-16 flex justify-center sm:my-5">
            <input
              type="text"
              placeholder="Search Amazon.com"
              className=" px-6 w-[80%] border-2 rounded-tl-xl"
            />
            <button className="px-5 py-3 bg-amber-500 border-t-r-lg border-b-r-lg text-xl rounded-br-xl">
              {" "}
              <span>
                {" "}
                <IoIosSearch />{" "}
              </span>
            </button>
          </div>

          {/* Hello, Sign in  */}
          <div className="flex flex-col items-center sm:my-3">
            <div className="flex items-center gap-3 text-lg">
              <span>
                <FaSignInAlt />
              </span>
              <p>Hello, Sign in </p>
            </div>
            <p>Account and Orders</p>
          </div>

          {/* show cart */}
          <button className=" text-2xl h-14 bg-blue-500 px-3 py-1 rounded-xl hover:bg-slate-400 hover:px-3 hover:py-1 hover:rounded-lg">
            <div className="flex gap-3">
              <Link to="/cart"><span className="text-3xl">
                {" "}
                <PiShoppingCartDuotone />
              </span>
                <span className="px-3 text-white rounded-2xl bg-red-500">{cart.length}</span> 
                </Link>
            </div>
          </button>
        </div>

        {/* 
beauty
mens-shirts
sunglasses
tablets
womens-bags
womens-watches
womens-jewellery
home-decoration
furniture
womens-dresses
tops
smartphones

 */}

        {/* Navbar 2 starts here */}
        <div className="py-2 px-5 w-auto sm-w-screen bg-black flex flex-wrap justify-evenly">
          <button className="px-3 py-2  text-lg text-white font-semibold">
            <Link to="/category/beauty"> Beauty </Link>
          </button>
          <button className="px-3 py-2  text-lg text-white font-semibold">
            <Link to="/category/mens-shirts"> Mens Shirts </Link>
          </button>
          <button className="px-3 py-2  text-lg text-white font-semibold">
            <Link to="/category/furniture"> Furniture </Link>
          </button>
          {/* <button className="px-3 py-2  text-lg text-white font-semibold">
            <Link to="category/home-decoration"> Home Decoration</Link>
          </button> */}
          <button className="px-3 py-2  text-lg text-white font-semibold">
            <Link to="/category/womens-jewellery"> Womens Jewellery </Link>
          </button>
          <button className="px-3 py-2  text-lg text-white font-semibold">
            <Link to="/category/womens-bags"> Womens Bags </Link>
          </button>
          <button className="px-3 py-2  text-lg text-white font-semibold">
            <Link to="/category/womens-watches"> Womens watches </Link>
          </button>
          <button className="px-3 py-2  text-lg text-white font-semibold">
            <Link to="/category/womens-dresses"> Womens Dresses </Link>
          </button>
          <button className="px-3 py-2  text-lg text-white font-semibold">
            <Link to="/category/tops"> Tops </Link>
          </button>
          <button className="px-3 py-2 text-lg text-white font-semibold">
            <Link to="/category/sunglasses"> Sunglasses </Link>
          </button>
          <button className="px-3 py-2 text-lg text-white font-semibold">
            <Link to="/category/tablets"> Tablets </Link>
          </button>
          <button className="px-3 py-2 text-lg text-white font-semibold">
            <Link to="/category/smartphones"> Smart Phones </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
