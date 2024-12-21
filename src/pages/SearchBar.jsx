import React, { useState } from 'react';
// import styles from './SearchBar.css';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';
import { Link } from 'react-router-dom';


const SearchBar = ({ searchResults, searchTerm }) => {
    return (
        <div >
            {searchTerm ? <div className="category-grid">

                {searchResults.map((item) => (


                    <Link to={`/product/${item.id}`} key={item.id}>
                        <div className="category-card">
                            <div className="image-container">
                                <img src={item.image} alt={item.name} className="Diet-image" />
                            </div>
                            <div className="Diet-info">
                                <h3 className="Diet-name">{item.name}</h3>
                                <p className="Diet-describtion">{item.describtion}</p>
                            </div>
                        </div>
                    </Link>


                ))}
            </div> : ""}
        </div>
    );
};

export default SearchBar;

