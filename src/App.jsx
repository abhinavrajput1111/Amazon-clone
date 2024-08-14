import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./index.css";
import "./App.css";
import Hero from "./Hero";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import Category from "./Category";
import Cart from "./Cart";

export const ecomContext = createContext();

function App() {
  const [featured, setFeatured] = useState();
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  async function getFeaturedProducts() {
    const response = await axios.get("https://dummyjson.com/products");
    const result = response.data.products;
    setFeatured(result);
  }

  return (
    <div>
      <ecomContext.Provider value={{ featured, category, setCategory, cart, setCart }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path=":id" element={<SingleProduct />}/>
              </Route>
            <Route path="/category" element={<Outlet />} >
              <Route index element={<Home />}></Route>
            <Route path=":key" element={<Category/>}></Route>
            </Route>  
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </BrowserRouter>
      </ecomContext.Provider>
    </div>
  );
}

export default App;
