import React, {useState} from 'react';
import "./ProductCard.css";

import Ratings from "../Ratings";

const ProductCard = ({product}) => {
    // id,image_url,name,product_color,short_description,price,discounted_price,ratings,category

    const [showAlert, setShowAlert] = useState(false);

    const handleAddToCart = () => {

        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 2000);


    };

    return (
        <div className="product__card">
            <div className="card__header">
                <img src={product.image_url} alt="Product"/>
            </div>
            <div className="card__body">
                <h2 className="product__name">{product.name}</h2>
                <p className="product__description">{product.short_description}</p>
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

                <div className="product__ratings">
                    <Ratings rating={product.ratings}/>
                </div>
            </div>
            <div className="card__footer">
                <button className="product__button" onClick={handleAddToCart}>
                    Add to Cart
                </button>

                {showAlert && (
                    <div className="custom__alert">
                        Product added to cart
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
