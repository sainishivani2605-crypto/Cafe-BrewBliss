import React, { useState } from 'react';

function menu() {
  const [cartItems, setCartItems] = useState([]);

  const menuItems = [
    { id: 1, name: 'Espresso', price: 149, desc: 'Rich and bold classic espresso shot.' },
    { id: 2, name: 'Hazelnut Latte', price: 229, desc: 'Creamy milk with premium hazelnut flavor.' },
    { id: 3, name: 'Chocolate Croissant', price: 189, desc: 'Flaky pastry filled with dark choco.' },
    { id: 4, name: 'Blueberry Cheesecake', price: 249, desc: 'Classic rich cheesecake with berry compote.' },
    { id: 5, name: 'Cold Brew', price: 179, desc: 'Smooth, 14-hour slow-steeped cold coffee.' },
    { id: 6, name: 'Avocado Toast', price: 299, desc: 'Fresh avocado mash on sourdough bread.' }
  ];

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="page-container" style={{ padding: '20px' }}>
      <div className="menu-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Our Brew Bliss Cafe Menu</h2>
        <div className="cart-badge">
          🛒 Cart: {cartItems.length} items
        </div>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <h3>{item.name}</h3>
            <p className="item-desc">{item.desc}</p>
            <div className="price-section">
              {/* Display karte waqt ₹ symbol lagaya hai */}
              <span className="price">₹{item.price}</span>
              <button className="add-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

     
      {cartItems.length > 0 && (
        <div className="cart-summary" style={{
          marginTop: '40px',
          padding: '20px',
          background: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '8px',
          color: '#333'
        }}>
          <h3 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
            Shopping Cart (Added Items)
          </h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: '1px solid #eee'
              }}>
                <span>☕ {item.name} - ₹{item.price}</span>
                <button 
                  onClick={() => removeFromCart(index)}
                  style={{
                    background: '#ff4d4d',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>

         
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            paddingTop: '15px',
            borderTop: '2px solid #333',
            fontSize: '18px'
          }}>
            <strong>Total Amount:</strong>
            <strong style={{ color: '#2ecc71' }}>{totalAmount}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default menu;