import React, { useState } from "react";
import axios from "axios";
function Menu() {
  const [cart, setCart] = useState([]);
  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      price: 149, 
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500",
      desc: "Rich and bold classic espresso shot."
    },
    {
      id: 2,
      name: "Hazelnut Latte",
      price: 229,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
      desc: "Creamy milk with premium hazelnut flavor."
    },
    {
      id: 3,
      name: "Chocolate Croissant",
      price: 189,
      image: "https://images.unsplash.com/photo-1555507036-ab794f4ade0a?w=500",
      desc: "Flaky pastry filled with dark chocolate."
    },
    {
      id: 4,
      name: "Blueberry Cheesecake",
      price: 249,
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
      desc: "Classic rich cheesecake with berry compote."
    },
    {
      id: 5,
      name: "Cold Brew",
      price: 179,
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500",
      desc: "Smooth, slow-steeped cold coffee."
    },
    {
      id: 6,
      name: "Avocado Toast",
      price: 299,
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
      desc: "Fresh avocado mash on sourdough bread."
    }
  ];

  
  const addToCart = (item) => {
    setCart([...cart, item]); 
  };

 
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="menu-page">

      <div className="menu-header">
        <h1>☕ Brew Bliss Cafe Menu</h1>
        <div className="cart-box">
          🛒 Cart : {cart.length} Items
        </div>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="menu-image"
            />
            <div className="menu-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="bottom-row">
                <span className="price">₹{item.price}</span>
              
                <button
                  className="cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===========================
          ADDED: LIVE CART SECTION
         =========================== */}
      <div className="cart-summary-section">
        <h2>🛍️ Selected Items in Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart-msg">Your cart is empty. Add some delicious items!</p>
        ) : (
          <div>
            <ul className="cart-items-list">
              {cart.map((cartItem, index) => (
                <li key={index} className="cart-item-row">
                  <span>{cartItem.name}</span>
                  <span className="cart-item-price">₹{cartItem.price}</span>
                </li>
              ))}
            </ul>
            
            <div className="cart-total-box">
              <h3>Total Amount: ₹{cart.reduce((total, item) => total + item.price, 0)}</h3>
              <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default Menu;