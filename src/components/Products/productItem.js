import { useDispatch } from "react-redux"
import { addProductToCart } from "../../reducers/productReducer";


const ProductItem = ({productId, productsName, productThumbnail, productPrice, productDesc}) => {
    const dispatch = useDispatch();
    function addToCart () {
        const data = {
            id: productId,
            name: productsName,
            image: productThumbnail,
            price: productPrice,
            description: productDesc
        };

        dispatch(addProductToCart(data))

    }
    return (
        <div className="ProductItem">
            <img src={productThumbnail} alt={productsName}/>
            <h4>{productsName}</h4>
            <span>{productPrice}</span>
            <p>{productDesc}</p>
            <button onClick={addToCart}>Add to addToCart</button>
        </div>
    )
}

export default ProductItem;

