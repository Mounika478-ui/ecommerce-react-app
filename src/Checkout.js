import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  // total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity * 80,
    0,
  );

  // place order
  const placeOrder = () => {
    setCart([]); // clear cart
    navigate("/success"); // go to success page
  };

  return (
    <div className="checkout-page">
      <h2>🧾 Checkout</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div className="checkout-item" key={item.id}>
          <img src={item.image} alt="" />

          <div className="checkout-info">
            <p>{item.title}</p>
            <p>₹{Math.round(item.price * 80)}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        </div>
      ))}

      <div className="checkout-total">
        <h3>Total: ₹{Math.round(total)}</h3>
      </div>

      {cart.length > 0 && <button onClick={placeOrder}>Place Order</button>}
    </div>
  );
}

export default Checkout;
