import React, { useState, useEffect } from 'react';

import Ratings from '../Ratings/Ratings';

import './ProductCard.css';
const ProductCard = ({ product }) => {
    const { image_url, name, short_description, price, discounted_price, ratings } = product;

    const [showAlert, setShowAlert] = useState(false);

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

    const handleAddToCart = () => {
        setShowAlert(true);
    };

    return (
        <div className="product__card">

            <div className="card__image">
                <img src={image_url} alt={`Product: ${name}`} />
            </div>


            <div className="card__heading">
                <h2 className="card__title">{name}</h2>
                <p className="card__description">{short_description}</p>
            </div>


            <div className="card__body">

                <div className="card__price">
                    {discounted_price ? (<>
                        <span className="price__original">${price}</span>
                        <span className="price__discounted">${discounted_price}</span>
                    </>) : (<span>${price}</span>)}
                </div>

                <div className="card__ratings">
                    <Ratings rating={ratings} />
                </div>


                <button className="product__button" onClick={handleAddToCart}>
                    Add to Cart
                </button>

                {showAlert && <div className="custom__alert">Product added to cart</div>}
            </div>
        </div>);
};

export default ProductCard;