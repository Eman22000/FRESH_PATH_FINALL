import React, { useState } from 'react';

export function CartPanel() {
  const [cartItems, setCartItems] = useState([
    { id: 1, product: 'Product 1', quantity: 2, price: 100 },
    { id: 2, product: 'Product 2', quantity: 1, price: 150 },
    { id: 3, product: 'Product 3', quantity: 3, price: 230 },
  ]);

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.quantity * item.price}</td>
              <td>
                <button onClick={() => removeCartItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
