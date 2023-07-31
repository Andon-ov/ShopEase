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

            <div className="card__image">
                <img src={product.image_url} alt="Product"/>
            </div>

            <div className="card__title">
                <h2 >{product.name}</h2>
            </div>


            <div className="card__description">
                <p>{product.short_description}</p>
            </div>
            <div className="card__price">

                {product.discounted_price ? (<>
                    <span className="price__original">${product.price}</span>
                    <span className="price__discounted">
                                ${product.discounted_price}
                            </span>
                </>) : (<span>${product.price}</span>)}
            </div>


            <div className="card__ratings">
                <Ratings rating={product.ratings}/>
            </div>

            <div className="card__footer">
                <button className="product__button" onClick={handleAddToCart}>
                    Add to Cart
                </button>

                {showAlert && (<div className="custom__alert">
                    Product added to cart
                </div>)}
            </div>
        </div>);
};

export default ProductCard;
