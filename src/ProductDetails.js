import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "./data";

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = productsData.find((p) => p.id === Number(id));

  const addToCart = () => {
    const exist = cart.find((p) => p.id === product.id);

    if (exist) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="details-page">
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <div className="details-box">
        <img src={product.image} alt="" />

        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>₹{Math.round(product.price * 80)}</h3>

          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
