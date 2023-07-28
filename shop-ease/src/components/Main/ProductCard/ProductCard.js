import React from "react";
import "./ProductCard.css";

import Ratings from "../Ratings";

const ProductCard = ({ product }) => {
    // id,image_url,name,product_color,short_description,price,discounted_price,ratings,category

    const handleAddToCart = () => {
        // Add the product to the cart logic here
        // For now, we'll just show the success alert
        alert("Product added to cart");
    };

    return (
        <div className="product__card">
            <img src={product.image_url} alt="Product" />
            <h2 className="product__name">{product.name}</h2>
            {/* <p className="product__description">{product.short_description}</p> */}
            <p className="product__price">
                {product.discounted_price ? (
                    <>
                        <span className="price__original">${product.price}</span>
                        <span className="price__discounted">
                            ${product.discounted_price}
                        </span>
                    </>
                ) : (
                    <span>${product.price}</span>
                )}
            </p>
            {/* <div className="product__ratings">
                <Ratings rating={product.ratings} />
            </div> */}
            <button className="product__button" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
