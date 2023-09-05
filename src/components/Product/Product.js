import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3 className='product-name'>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <small>Only {stock} left in stock - Order Now</small>
                <br />
                <br />
                <button onClick={() => props.handleAddProduct(props.product)} className='cart-btn'>
                <FontAwesomeIcon icon={faShoppingCart}/> Add to cart
                </button>
            </div>
            <div>
            </div>
            <div></div>
        </div>
    );
};

export default Product;