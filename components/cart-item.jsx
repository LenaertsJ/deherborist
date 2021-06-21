import { TiDeleteOutline } from "react-icons/ti";
import { useContext } from 'react';
import { CartContext } from '../context/cart';
import { adjustQuantity, removeItemFromCart, emptyCart } from '../context/actions'

function CartItem({product, quantity}) {

    const { dispatch } = useContext(CartContext);
    const options = [...new Array(product.stock)].map((v, index) => {
        return (
        <option key= {index} value={index + 1} selected={quantity === (index + 1)}>{index + 1}</option>
    )});

    return (
        <div className="cart-products flex">
            <div className="product-details">
                <h4 className="product-title">Product: {product.name}</h4>
                <p className="product-category">Type: {product.category}</p>
            </div>
            <div className="product-price flex">
                <div className="quantity">
                    <p>Quantity: </p>
                    <div className="counter">
                        <select name="quantity" onChange={(e) => dispatch(adjustQuantity(product, e.target.value))}>
                            { options }
                        </select>
                    </div>
                </div>
                <p className="price">Prijs: {product.price} €</p>
                <TiDeleteOutline className="icon" onClick={()=> dispatch(removeItemFromCart(product))}/>
            </div>
        </div>
    )
}

export default CartItem
