import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  // increase quantity
  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // decrease quantity
  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity * 80,
    0,
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          {/* Image */}
          <img src={item.image} alt="" />

          {/* Details */}
          <div className="cart-details">
            <p className="title">{item.title}</p>
            <p className="price">₹{Math.round(item.price * 80)}</p>

            {/* Quantity */}
            <div className="qty-box">
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
        </div>
      ))}

      {/* Total */}
      <div className="cart-total">
        <h3>Total: ₹{Math.round(total)}</h3>
      </div>

      {/* ✅ Checkout Button */}
      {cart.length > 0 && (
        <button
          onClick={() => navigate("/checkout")}
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "orange",
            border: "none",
            cursor: "pointer",
          }}
        >
          Go to Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
