// Import necessary dependencies from React
import React, { useState, useEffect } from 'react';

// Import the Ratings component
import Ratings from '../Ratings/Ratings';

// Import CSS styles for the component
import './ProductCard.css';

// ProductCard component
const ProductCard = ({ product }) => {
    // Destructure product details
    const { image_url, name, short_description, price, discounted_price, ratings } = product;

    // State to manage alert visibility
    const [showAlert, setShowAlert] = useState(false);

    // Effect to hide alert after a certain time
    useEffect(() => {
        let timer;
        if (showAlert) {
            timer = setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [showAlert]);

    // Function to handle adding to cart
    const handleAddToCart = () => {
        setShowAlert(true);
    };

    return (
        <div className="product__card">

            {/* Display product image */}
            <div className="card__image">
                <img src={image_url} alt={`Product: ${name}`} />
            </div>

            {/* Display product heading */}
            <div className="card__heading">
                <h2 className="card__title">{name}</h2>
                <p className="card__description">{short_description}</p>
            </div>

            {/* Display product details */}
            <div className="card__body">

                {/* Display product price */}
                <div className="card__price">
                    {discounted_price ? (
                        <>
                            <span className="price__original">${price}</span>
                            <span className="price__discounted">${discounted_price}</span>
                        </>
                    ) : (
                        <span>${price}</span>
                    )}
                </div>

                {/* Display product ratings */}
                <div className="card__ratings">
                    <Ratings rating={ratings} />
                </div>

                {/* Add to cart button */}
                <button className="product__button" onClick={handleAddToCart}>
                    Add to Cart
                </button>

                {/* Display alert when product is added to cart */}
                {showAlert && <div className="custom__alert">Product added to cart</div>}
            </div>
        </div>
    );
};

export default ProductCard;
