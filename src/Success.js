import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <h2>🎉 Order Placed Successfully!</h2>

      <p>Thank you for your purchase.</p>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default Success;
