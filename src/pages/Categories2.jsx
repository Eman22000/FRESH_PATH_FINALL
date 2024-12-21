import React from 'react';
import './Categories.css';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';
import { Link } from 'react-router-dom';

const Categories = ({Diets}) => {
    

    return (
        <section className="category-section">
            <div className="category-container">
                <div className="category-header">
                    <span className="subtitle">CHOSE YOUR DIET</span>
                    <h2 className="title">Enjoyable Healthy Life Style<br />from fresh path to you.</h2>
                </div>
                <div className="category-grid">
                    {Diets.map((Diet) => (
                        <Link to={`/product/${Diet.id}`} key={Diet.id}>
                            <div className="category-card">
                                <div className="image-container">
                                    <img src={Diet.image} alt={Diet.name} className="Diet-image" />
                                </div>
                                <div className="Diet-info">
                                    <h3 className="Diet-name">{Diet.name}</h3>
                                    <p className="Diet-describtion">{Diet.describtion}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
