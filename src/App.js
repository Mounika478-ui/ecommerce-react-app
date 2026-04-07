import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import Checkout from "./Checkout";
import Wishlist from "./Wishlist";
import Success from "./Success";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <BrowserRouter>
      <Header cart={cart} />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />

        {/* Cart */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetails cart={cart} setCart={setCart} />}
        />

        {/* Success Page */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
