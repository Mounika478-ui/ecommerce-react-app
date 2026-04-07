import React from "react";
import { Link } from "react-router-dom";

function Header({ cart }) {
  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <div className="header">
      {/* Logo */}
      <h2 className="logo">🛒 ShopEasy</h2>

      {/* Navigation */}
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
        <Link to="/wishlist">Wishlist</Link>
      </div>
    </div>
  );
}

export default Header;
