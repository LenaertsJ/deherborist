import { TiDeleteOutline } from "react-icons/ti";
import { useState } from 'react';

import Counter from '../components/counter';

function CartItem({cartItem, handleRemove}) {
    //STATES
    const [quantity, setQuantity] = useState(cartItem.quantity);

    //HANDLERS
    const handleCounterClick = (e) => {
    e.preventDefault();
    const min = 0;
    //change this value by available stock
    const max = 4;
    if (e.target.innerText === "+") {
      quantity < max ? setQuantity(quantity + 1) : quantity;
    } else {
      quantity > min ? setQuantity(quantity - 1) : quantity;
    }
  };

    return (
        <div className="cart-products flex">
            <div className="product-details">
                <h4 className="product-title">Product: {cartItem.name}</h4>
                <p className="product-category">Type: {cartItem.category}</p>
            </div>
            <div className="product-price flex">
                <Counter quantity={quantity} handleCounterClick={handleCounterClick}/>
                <p className="price">Prijs: {cartItem.price} €</p>
                <TiDeleteOutline className="icon" onClick={() => handleRemove(cartItem.id) }/>
            </div>
        </div>
    )
}

export default CartItem
