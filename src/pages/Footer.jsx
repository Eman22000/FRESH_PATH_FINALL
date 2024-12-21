import React from 'react'
import { Facebook, Instagram, Twitter, MessageCircleHeart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';
const logo = require('../assets/logo_.png');

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={logo} alt="Logo" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque hic pariatur odio nemo nulla quod? Unde hic minima repellendus. Nemo atque labore magni facere tempore autem, ipsam itaque veniam aperiam?</p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/share.php?u=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fcoffee-icon-icon-element_7186003.html?share=2"><Facebook /></a>
                        <a href="https://www.instagram.com/"><Instagram /></a>
                        <a href=""><Twitter /></a>
                        <a href="https://web.whatsapp.com/"><MessageCircleHeart /></a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <div className='footer-content-center-links'>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About-Us</Link>
                        <Link to="/team">Our-Team</Link>
                        <Link to="/categories">Diets</Link>
                    </div>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+20 0123456787</li>
                        <li>contact@fresh_path.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                copyright 2024 @fresh_path.com - All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;
