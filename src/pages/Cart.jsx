import React, { useState, useEffect } from 'react'; 
const Cart = ({ cartIsOpen, setCartIsOpen }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    setIsLoading(true);
    try {
      const response = await new Promise(resolve =>
        setTimeout(() => resolve([
          { id: 1, name: 'Cinnamon Roll', price: 2.50, quantity: 1, image: '/placeholder.svg' },
          { id: 2, name: 'Croissant', price: 1.75, quantity: 2, image: '/placeholder.svg' },
          { id: 3, name: 'Chocolate Muffin', price: 2.25, quantity: 1, image: '/placeholder.svg' },
        ]), 1000)
      );
      setCartItems(response);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setCartIsOpen(false);  
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-button" onClick={handleClose}>×</button>
      </div>

      {isLoading ? (
        <p>Loading cart items...</p>
      ) : cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <button className="remove-button" onClick={() => console.log('Remove item')}>
                    Remove
                  </button>
                </div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => console.log('Change quantity')}
                  className="quantity-input"
                />
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="subtotal">
              <span>Subtotal</span>
              <span>${calculateSubtotal()} USD</span>
            </div>
            <button className="checkout-button" onClick={() => console.log('Proceed to Checkout')}>
              Continue To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
