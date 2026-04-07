import React from "react";

function Wishlist({ wishlist }) {
  return (
    <div className="wishlist-page">
      <h2>❤️ Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map((item, index) => (
        <div className="wishlist-item" key={index}>

          {/* Image */}
          <img src={item.image} alt="" />

          {/* Details */}
          <div className="wishlist-info">
            <p>{item.title}</p>
            <p>₹{Math.round(item.price * 80)}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Wishlist;