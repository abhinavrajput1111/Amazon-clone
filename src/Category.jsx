import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { ecomContext } from "./App";

function key() {
    const [keyProducts, setkeyProducts] = useState();
    
    const { key } = useParams();

const {category} =   useContext(ecomContext);

    useEffect(() => {
        getDatabyCategory(key);
    }, [key])
    
  async function getDatabyCategory(key) {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${key}`
    );

      setkeyProducts(response.data.products);
      console.log(response.data.products)
  
  }

    return (
        <>
            <Navbar />
            
        {/* parent div of hero */ }
            
      <div className="w-screen h-full hero-section">
        {/* Slide show div */}


        <h1 className="text-4xl heading-featured-products text-center my-3 tracking-wider font-semibold">
          {category}
        </h1>

        <div className="w-full p-5 bg-slate-200">
          <div className="flex flex-wrap gap-5 justify-evenly">
            {keyProducts && keyProducts.length > 0
              ? keyProducts.map((item, index) => {
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

                      <div className="flex justify-center">
                        <button className="px-4 py-3 my-3 rounded-2xl cursor-pointer w-[80%] mx-auto text-center bg-amber-500 text-white font-bold">
                          <Link to={`/product/${item.id}`}>View Product</Link>
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

export default key;
