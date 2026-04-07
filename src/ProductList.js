import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList({ products, cart, setCart, wishlist, setWishlist }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Add to Cart
  const addToCart = (item) => {
    const exist = cart.find((p) => p.id === item.id);

    if (exist) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
        ),
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearch("");
  };

  // Filter
  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2>Products</h2>

      {/* 🔍 SEARCH BOX */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={clearSearch}>Clear</button>
      </div>

      {/* PRODUCTS */}
      <div className="grid">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.image}
              alt=""
              className="product-img"
              onClick={() => navigate("/product/" + item.id)}
            />

            <p>{item.title}</p>
            <p>₹{Math.round(item.price * 80)}</p>

            <button onClick={() => addToCart(item)}>Add to Cart</button>

            <button onClick={() => setWishlist([...wishlist, item])}>
              ❤️ Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
