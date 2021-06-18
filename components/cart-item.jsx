import { TiDeleteOutline } from "react-icons/ti";
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/cart';
import { adjustQuantity, removeItemFromCart } from '../context/actions'

function CartItem({product, quantity}) {

    const [count, setCount] = useState(quantity)
    const { dispatch } = useContext(CartContext);

    const decrementCounter = () => setCount(count - 1);
    const incrementCounter = () => setCount(count + 1);

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
                        <button className="btn quantity-btn" disabled={count === 1} onClick={decrementCounter}>-</button>
                        <p>{ count }</p>
                        <button className="btn quantity-btn" disabled={count === product.stock} onClick={incrementCounter}>+</button>
                    </div>
                </div>
                <p className="price">Prijs: {product.price} €</p>
                <TiDeleteOutline className="icon" onClick={()=> dispatch(removeItemFromCart(product))}/>
            </div>
        </div>
    )
}

export default CartItem
