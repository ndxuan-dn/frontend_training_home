import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { incrementQuantity, decrementQuantity, removeItem } from '../../reducers/productReducer';

const CartItem = ({id, image, title, desc, price, quantity=0})=> {
    const dispatch = useDispatch();
    return (
        <div className="cartItem">
            <img className="cartItem-thumbnail" src={image} alt={title} />
            <div className="cartItem-info">
                <h4 className="cartItem-title">{title}</h4>
                <p className="cartItem-price">
                    <span>$</span>
                    <span>{price}</span>
                </p>
                <div className="cartItem-action">
                    <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                    {quantity}
                    <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
                </div>
                <button className="cartItem-remove" onClick={() => dispatch(removeItem(id))}>Remove Item</button>
            </div>
        </div>
    )
}

export default CartItem;