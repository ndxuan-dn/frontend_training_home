import React, { useState, useEffect } from 'react';

import ProductItem from './productItem';

import { useSelector, useDispatch } from "react-redux";
import { getAllProductsSync } from "../../reducers/productReducer";

import axios from 'axios';

const Products = () => {
    const DataProducts = useSelector(state => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductsSync())
    }, [])

    const handleAddtocart = (e) => {
        console.log(e);
    }

    return (
        <div className="productsManagement">
            {DataProducts && 
                DataProducts.map(item => <ProductItem productId={item.id} productsName={item.name} productThumbnail={item.image} productPrice={item.price} productDesc={item.description} handleAddtocart={handleAddtocart}/>)
            }
        </div>
    )
}

export default Products;