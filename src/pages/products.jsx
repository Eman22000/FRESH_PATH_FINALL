import React from 'react';
import './products.css';
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
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        { id: 1, name: 'Greek Yogurt Parfait with Berries', describtion: 'A healthy and delicious parfait layered with creamy Greek yogurt, fresh berries, and a touch of honey.', image: t1 },
        { id: 2, name: 'Keto Egg Salad Bowl', describtion: 'A low-carb, high-protein egg salad bowl perfect for keto enthusiasts.', image: t2 },
        { id: 3, name: 'Grilled Chicken Avocado Salad', describtion: 'A refreshing salad with grilled chicken, ripe avocado, and mixed greens, topped with a tangy dressing.', image: t3 },
        { id: 4, name: 'Spinach & Egg Scramble with Raspberries', describtion: 'A nutritious breakfast scramble made with fresh spinach and eggs, served with a side of juicy raspberries.', image: t4 },
        { id: 5, name: 'Stuffed Bell Peppers with Ground Turkey', describtion: 'Flavorful bell peppers stuffed with seasoned ground turkey and baked to perfection.', image: t5 },
        { id: 6, name: 'Quinoa and Roasted Veggie Bowl', describtion: 'A wholesome bowl featuring fluffy quinoa and a mix of roasted seasonal vegetables.', image: t6 },
        { id: 7, name: 'Chicken Stew with Vegetables', describtion: 'A comforting stew made with tender chicken and a medley of hearty vegetables.', image: t7 },
        { id: 8, name: 'Avocado and Egg Breakfast Bowl', describtion: 'A protein-packed breakfast bowl with creamy avocado and perfectly cooked eggs.', image: t8 },
        { id: 9, name: 'Creamy Broccoli and Pesto Pasta Salad', describtion: 'A delightful pasta salad tossed with creamy pesto sauce and fresh broccoli florets.', image: t9 },
        { id: 10, name: 'Juice', describtion: 'A refreshing and natural juice made from freshly squeezed fruits.', image: t10 },
        { id: 11, name: 'Kale Salad with Chickpeas', describtion: 'A nutritious kale salad tossed with protein-rich chickpeas and a light lemon dressing.', image: t11 },
        { id: 12, name: 'Tomato Salad', describtion: 'A simple and fresh salad made with juicy tomatoes, olive oil, and a hint of basil.', image: t12 },
    ];
    

    return (
        <section className="products-section">
            <div className="products-container">
                <div className="products-header">
                    <span className="subtitle">our product</span>
                    <h2 className="title">OUR PRODUCT FOR YOUR CHOOSEN DIET</h2>
                </div>
                <div className="products-grid">
                    {products.map((product) => (
                        <Link to={`/singleproduct/${product.id}`} key={product.id}>
                            <div className="products-card">
                                <div className="image-container">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-describtion">{product.describtion}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
