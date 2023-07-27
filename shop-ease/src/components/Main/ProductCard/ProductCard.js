import React from 'react';
import './ProductCard.css';

import Ratings from '../Ratings';

const ProductCard = ({ product }) => {
    // const {id,image_url,name,product_color,short_description,price,discounted_price,ratings,category} = product;

    console.log(product);
    const handleAddToCart = () => {
        // Add the product to the cart logic here
        // For now, we'll just show the success alert
        alert('Product added to cart');
    };

    return (
        <div className="product-card">
            <img src={product.image_url} alt="Product" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.short_description}</p>
            <p className="product-price">
                {product.discounted_price ? (
                    <>
                        <span className="original-price">${product.price}</span>
                        <span className="discounted-price">${product.discounted_price}</span>
                    </>
                ) : (
                    <span>${product.price}</span>
                )}
            </p>
            <div className="product-ratings">
                <Ratings rating={product.ratings} />
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
