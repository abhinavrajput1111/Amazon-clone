import React, { useContext } from "react";
import { ecomContext } from "./App";

function Cart() {
  const { cart } = useContext(ecomContext);

  let cartPrice = 0;
  
  // Calculate total cart price using forEach
  if (cart && cart.length > 0) {
    cart.forEach(item => {
      cartPrice += item.price;
    });
  }

  return (
    <>
      <h1 className="text-center font-mono text-5xl my-3">Cart</h1>
      <hr />
      <div className="flex gap-3 h-screen w-auto justify-center">
        <div className="w-[60%] flex flex-col gap-5 p-5 m-3">
          {cart && cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="border p-4 rounded-lg bg-slate-200 ">
                <div className="flex gap-5 items-center rounded-lg bg-white m-3">
                  <div className="w-[30%]">
                    <img
                      src={item.images[0]}
                      alt={item.description}
                      className=""
                    />
                  </div>
                  <div>
                    <h2 className="my-2 text-3xl text-center font-semibold mb-5">
                      {item.title}
                    </h2>

                    <div className="my-3 flex w-[75%] text-white justify-between rounded-lg mx-auto bg-blue-700 px-8 py-2">
                      <p className="text-xl">
                        <span>Brand-</span> {item.brand}{" "}
                      </p>
                      <p className="text-xl">
                        <i>Rating -</i> 5/{item.rating}
                      </p>

                      <p className="text-xl">{item.returnPolicy}</p>
                    </div>

                    <p className="my-2 text-wrap text-xl">{item.description}</p>

                    <p className="text-2xl">
                      Price:{" "}
                      <span className="text-blue-500 font-mono">
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="w-[25%] h-auto bg-pink-200 p-5 m-3">
          <div>
            {cart && cart.length > 0 ? (
              <p className="text-2xl">
                Cart Price:{" "}
                <span className="text-blue-500 font-mono">{cartPrice}</span>
              </p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          {/* Additional content */}
        </div>
      </div>
    </>
  );
}

export default Cart;
