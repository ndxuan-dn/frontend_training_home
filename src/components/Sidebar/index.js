import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import React, { useState, useEffect } from 'react';

import CartItem from "../Products/cartItem";

export default function Sidebar () {
    const carts = useSelector((state) => state.product.carts)

    const [isActive, setisActive] = useState(false)
    return (
        <div id="sidebar">
            <div className="header">
                {/* <image className="avatar"></image> */}
                <p className="username">Hi, Tran Duc Phuc!</p>
            </div>
            <div className="body">
                <ul>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/items">Item</Link>
                    </li>
                    <li>
                        <Link to="/students">Students</Link>
                    </li>
                </ul>

                <div className="CartSection">
                    {carts && carts?.map((item) => 
                        <CartItem 
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    )}
                </div>

            </div>
            <div className="footer">
                <p>create by KLDY</p>
            </div>
        </div>
    )
}