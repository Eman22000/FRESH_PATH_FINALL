import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import t1 from '../assets/frut_1.jpg';
import t2 from '../assets/fast3.png';
import t3 from '../assets/fast2.png';
import t4 from '../assets/dashhh.png';
import t5 from '../assets/carb3.png';
import t6 from '../assets/img1.png';
import t7 from '../assets/keto1.png';
import t8 from '../assets/pre.png';
import t9 from '../assets/salad_1.jpg';
import t10 from '../assets/fast.png';
import t11 from '../assets/WhatsApp Image 2024-12-18 at 16.37.27_1bbfed56.jpg';
import t12 from '../assets/pre3.png';

const products = [
  { id: 1, name: 'Greek Yogurt Parfait with Berries', description: 'A healthy and delicious parfait layered with creamy Greek yogurt, fresh berries, and a touch of honey.', image: t1, price: 10, reviews: [] },
  { id: 2, name: 'Keto Egg Salad Bowl', description: 'A low-carb, high-protein egg salad bowl perfect for keto enthusiasts.', image: t2, price: 12, reviews: [] },
  { id: 3, name: 'Grilled Chicken Avocado Salad', description: 'A refreshing salad with grilled chicken, ripe avocado, and mixed greens, topped with a tangy dressing.', image: t3, price: 15, reviews: [] },
  { id: 4, name: 'Spinach & Egg Scramble with Raspberries', description: 'A nutritious breakfast scramble made with fresh spinach and eggs, served with a side of juicy raspberries.', image: t4, price: 8, reviews: [] },
  { id: 5, name: 'Stuffed Bell Peppers with Ground Turkey', description: 'Flavorful bell peppers stuffed with seasoned ground turkey and baked to perfection.', image: t5, price: 14, reviews: [] },
  { id: 6, name: 'Quinoa and Roasted Veggie Bowl', description: 'A wholesome bowl featuring fluffy quinoa and a mix of roasted seasonal vegetables.', image: t6, price: 13, reviews: [] },
  { id: 7, name: 'Chicken Stew with Vegetables', description: 'A comforting stew made with tender chicken and a medley of hearty vegetables.', image: t7, price: 16, reviews: [] },
  { id: 8, name: 'Avocado and Egg Breakfast Bowl', description: 'A protein-packed breakfast bowl with creamy avocado and perfectly cooked eggs.', image: t8, price: 9, reviews: [] },
  { id: 9, name: 'Creamy Broccoli and Pesto Pasta Salad', description: 'A delightful pasta salad tossed with creamy pesto sauce and fresh broccoli florets.', image: t9, price: 11, reviews: [] },
  { id: 10, name: 'Juice', description: 'A refreshing and natural juice made from freshly squeezed fruits.', image: t10, price: 5, reviews: [] },
  { id: 11, name: 'Kale Salad with Chickpeas', description: 'A nutritious kale salad tossed with protein-rich chickpeas and a light lemon dressing.', image: t11, price: 12, reviews: [] },
  { id: 12, name: 'Tomato Salad', description: 'A simple and fresh salad made with juicy tomatoes, olive oil, and a hint of basil.', image: t12, price: 7, reviews: [] },
];

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const [newReview, setNewReview] = useState({ name: '', comment: '' });

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      product.reviews.push(`${newReview.name}: ${newReview.comment}`);
      setNewReview({ name: '', comment: '' });
    }
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="single-product">
      <div className="img-box">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>Price: ${product.price.toFixed(2)}</h3>
        <div className="quantity-selector">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button className="add-to-cart">Add to Cart</button>
        <h4>Reviews:</h4>
        <ul>
          {product.reviews.length > 0 ? (
            product.reviews.map((review, index) => <li key={index}>{review}</li>)
          ) : (
            <li>No reviews yet. Be the first to review!</li>
          )}
        </ul>
        <form onSubmit={handleSubmitReview}>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            placeholder="Your Review"
            required
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
