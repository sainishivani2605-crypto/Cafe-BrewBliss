import React, { useState } from "react";
import axios from "axios";

function Menu() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

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

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

  try {
    const response = await axios.post(
      "http://localhost:5000/api/orders",
      {
        items: cart,
        total: cart.reduce(
          (sum, item) => sum + item.price,0 ),
      }
    );

    alert(response.data.message);

    setCart([]);
    setShowCart(false);

  } catch (error) {
    console.log(error);
    alert("Order Failed!");
  }
};
return (
    <div className="menu-page">

      <div className="menu-header">
        <h1>☕ Brew Bliss Cafe Menu</h1>

        <div
          className="cart-box"
          onClick={() => setShowCart(true)}
          style={{ cursor: "pointer" }}
        >
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
      {/* ================= CART SIDEBAR ================= */}

      {showCart && (
        <>
          <div
            className="cart-overlay"
            onClick={() => setShowCart(false)}
          ></div>

          <div className="cart-sidebar">

            <div className="cart-sidebar-header">
              <h2>🛒 Your Cart</h2>

              <button
                className="close-btn"
                onClick={() => setShowCart(false)}
              >
                ✖
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="empty-cart-msg">
                Your cart is empty.
              </p>
            ) : (
              <>
                <div className="cart-items">

                  {cart.map((item, index) => (
                    <div
                      className="cart-item"
                      key={index}
                    >
                      <div>
                        <h4>{item.name}</h4>
                        <p>₹{item.price}</p>
                      </div>

                      <button
                        className="delete-btn"
                        onClick={() => removeFromCart(index)}
                      >
                        ❌
                      </button>
                    </div>
                  ))}

                </div>

                <div className="cart-footer">

                  <h3>
                    Total : ₹
                    {cart.reduce(
                      (total, item) => total + item.price,
                      0
                    )}
                  </h3>

                  <button
                    className="order-btn"
                    onClick={placeOrder}
                  >
                    Order Now
                  </button>

                  <button
                    className="clear-cart-btn"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>

                </div>
              </>
            )}

          </div>
        </>
      )}
        

    </div>

  );
}

export default Menu;