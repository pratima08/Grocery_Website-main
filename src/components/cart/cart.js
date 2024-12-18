// Cart.js
import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: '15px' }}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</h3>
    </div>
  );
}

export default Cart;
