import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList({ products, cart, setCart, wishlist, setWishlist }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ✅ Loading state
  if (products.length === 0) {
    return <h3 style={{ textAlign: "center" }}>Loading products...</h3>;
  }

  // ✅ Add to Cart
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

  // ✅ Add to Wishlist (prevent duplicates)
  const addToWishlist = (item) => {
    const exist = wishlist.find((p) => p.id === item.id);

    if (!exist) {
      setWishlist([...wishlist, item]);
    }
  };

  // ✅ Clear search
  const clearSearch = () => {
    setSearch("");
  };

  // ✅ Filter products
  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Products</h2>

      {/* 🔍 Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={clearSearch}>Clear</button>
      </div>

      {/* 🛍 Products Grid */}
      <div className="grid">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            {/* ✅ Image with fallback */}
            <img
              src={item.image}
              alt={item.title}
              className="product-img"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/200";
              }}
              onClick={() => navigate("/product/" + item.id)}
            />

            {/* ✅ Details */}
            <p className="title">{item.title}</p>
            <p className="price">₹{Math.round(item.price * 80)}</p>

            {/* ✅ Buttons */}
            <div className="btn-group">
              <button onClick={() => addToCart(item)}>Add to Cart</button>

              <button onClick={() => addToWishlist(item)}>❤️ Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
