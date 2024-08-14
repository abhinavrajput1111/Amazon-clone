import React, { useContext } from "react";
import { ecomContext } from "./App";
import { Link } from "react-router-dom";

function Hero() {
  const { featured, cart, setCart } = useContext(ecomContext);

  return (
    <>
      {/* parent div of hero */}
      <div className="w-screen h-full hero-section">
        {/* Slide show div */}
        <div className="slide-show h-auto w-full border-2 p-5"></div>

        <h1 className="text-4xl heading-featured-products text-center my-3 tracking-wider font-semibold">
          Featured Products
        </h1>

        <div className="w-full p-5 bg-slate-200">
          <div className="flex flex-wrap gap-5 justify-evenly">
            {featured && featured.length > 0
              ? featured.map((item, index) => {
                  return (
                    <div key={index} className="w-[22%] bg-white">
                      <img
                        className="my-3 h-40 mx-auto"
                        src={item.images[0]}
                        alt={item.description}
                      />

                      <p className="text-gray-500 my-2 px-3 text-lg">
                        {item.category}
                      </p>

                      <span className="text-white rounded-lg font-mono px-2 py-2 m-2 text-lg bg-red-600 ">
                        Deal Price
                      </span>
                      <span className="font-bold text-center text-2xl">
                        {item.price}
                      </span>

                      <span className="line-through text-lg mx-2  text-gray-600">
                        {(item.price * 1.25).toFixed(2)} M.R.P
                      </span>

                      <p className="text-wrap text-2xl text-center font-semibold my-5">
                        {item.title}
                      </p>

                      <p></p>

                      {/* div to jump to single product page */}

                      <div className="flex justify-evenly">
                        <button className="px-4 py-3 my-3 rounded-2xl cursor-pointer w-[40%] mx-auto text-center bg-amber-500 text-white font-bold">
                          <Link to={`/product/${item.id}`}>View Product</Link>
                        </button>

                          <button className="px-4 py-3 my-3 rounded-2xl cursor-pointer w-[40%] mx-auto text-center bg-blue-500 text-white font-bold" onClick={()=>{
                            setCart((prev)=>{
                              return [...prev, item];
                            })
                          console.log(cart);
                          }}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  );
                })
              : "Loading"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
