import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './aboutus.css';
const aboutImage = require('../assets/about-2.jpg');

const About = () => {
    return (
        <div className="about-container">
            <div className="about-grid">
                {/* Left Column */}
                <div className="about-left">
                    <div className="experience-text">17 years of</div>
                    <h1 className="experience-title">Experience</h1>
                    <div className="image-container">
                        <img
                            src={aboutImage}
                            alt="Organic farmers harvesting fresh vegetables in the field"
                            className="main-image"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="about-right">
                    <div className="content-section">
                        <h2 className="main-title">Fresh & Healthy food from farm to your door</h2>
                        <p className="description">
                            Organic farmers prioritize the use of compost, cover crops, and crop
                            rotation to enrich the soil with nutrients and maintain its fertility.
                        </p>
                    </div>

                    <div className="features">
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span className="feature-text">Natural Products</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span className="feature-text">Organic fresh Food</span>
                        </div>
                    </div>

                    <p className="description">
                        Organic farmers prioritize the use of compost, cover crops, and crop
                        rotation to enrich the soil with nutrients and maintain its fertility.
                        By doing so, they promote the growth of healthy produce.
                    </p>

                    <div className="delivery-feature">
                        <div className="delivery-icon">
                        <ShoppingCart className='icon'/>
                        </div>
                        <h3 className="delivery-text">
                            Every day fresh and quality product delivery to your doorstep
                        </h3>
                    </div>

                    <button className="learn-more-btn">
                        Learn more
                        <span className="arrow-icon">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;

