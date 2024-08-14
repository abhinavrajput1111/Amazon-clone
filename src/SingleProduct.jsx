import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function SingleProduct() {
  const [singleData, setSingleData] = useState();

  const { id } = useParams();

  useEffect(() => {
    getSingleProductData(id);
  }, [id]);

  async function getSingleProductData(id) {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setSingleData(response.data);
    console.log(response.data);
  }

  return (
    <>
      <Navbar />
      {singleData && Object.keys(singleData).length > 0 ? (
        <div className="flex justify-evenly px-5 m-5 p-5 h-full w-full">
          <div className="w-[30%] bg-amber-200">
            <img
              src={singleData.images[0]}
              alt={singleData.description}
              className="my-auto"
            />
          </div>
          <div className="w-[45%] p-5 flex justify-center ">
            <div className="my-5">
              <h1 className="text-4xl text-center my-5 italic tracking-wider text-red-700 font-semibold">
                {singleData.title}
              </h1>
              {/* to give brand rating and return policy in a line */}
              <div className=" my-3 flex text-white justify-between rounded-lg mx-auto bg-blue-700 px-8 py-2">
                <p className="text-2xl">
                  <span className="">Brand-</span> {singleData.brand}{" "}
                </p>
                <p className=" text-2xl ">
                  <i>Rating -</i> 5/{singleData.rating}
                </p>

                <p className="text-2xl">{singleData.returnPolicy}</p>
              </div>

              <p className="text-2xl leading-10 p-4">
                {singleData.description}
              </p>

              <div className="text-center">
                <p className="my-2 text-3xl font-bold italic text-green-600">
                  <span className="text-lg px-3 py-2 mx-5 bg-blue-800 rounded-lg text-white">
                    Deal Price
                  </span>
                  Rs.{singleData.price}{" "}
                  <span className="mx-5 text-red-700 line-through">
                    
                    {(singleData.price * 1.25).toFixed(2)} M.R.P
                  </span>{" "}
                </p>
              </div>

              <div className="flex justify-center my-5 mt-10">
                <button className="px-4 py-3 text-2xl text-white w-[60%] bg-amber-500 rounded-xl">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
}

export default SingleProduct;
