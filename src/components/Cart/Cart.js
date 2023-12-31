import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return precision;
    }
    return (
        <div>
        <h4>Order Summery</h4>
        <p>Item Ordered: {cart.length}</p>
        <p>Price: ${formatNumber(total)}</p>
        <p>Shipping Cost: {shipping}</p>
        <p>Tax: {tax}</p>
        <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;