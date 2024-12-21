import React, { useEffect } from 'react';
import './home.css';
import { useLocation } from 'react-router-dom';
const Home = () => {
    console.log('Home is rendering!');
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location]);

    return (
        <div className="home">
            <div className="home-overlay">
                <div className="home-contents">
                    <h2>Fresh Path</h2>
                    <p> Your Guide To A Balanced Life </p>
                    <button>View Categories</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
