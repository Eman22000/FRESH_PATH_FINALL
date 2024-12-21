import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleUserRound, Search, ShoppingCart, Menu } from 'lucide-react';
import logo from '../../assets/logo_.png';
import './navbar.css';

const Navbar = ({ setCartIsOpen , setShowLogin , handleSearch , searchTerm}) => { // إضافة Prop لتحديث حالة السلة من Navbar
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchIsOpen, setSearchIsOpen] = useState(false);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleSearch = () => setSearchIsOpen(!searchIsOpen);
    const toggleCart = () => setCartIsOpen(prev => !prev);
    

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                <Menu />
            </div>

            <div className={`nav-items ${menuOpen ? "active" : "hidden"}`}>
                <div className="links">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About-Us</Link>
                    <Link to="/team">Our-Team</Link>
                    <Link to="/categories">Diets</Link>
                    <Link onClick={toggleSearch}><Search /></Link>
                    <input type="text" className={`transition ${searchIsOpen ? "input-search-change" : "input-search"}`} onInput={handleSearch} value={searchTerm} />
                    <span onClick={toggleCart}>
                        <ShoppingCart />
                    </span>
                    <Link to="/profile"><CircleUserRound /></Link>
                    <button onClick={() => setShowLogin(true)} className=" sign-in-button"> Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
