import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

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

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="details-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <div className="details-box">
        {/* Image */}
        <img src={product.image} alt="" />

        {/* Info */}
        <div className="details-info">
          <h2>{product.title}</h2>
          <p className="desc">{product.description}</p>
          <h3>₹{Math.round(product.price * 80)}</h3>

          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
