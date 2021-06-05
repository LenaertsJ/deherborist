import Link from 'next/link';
import { CartContext } from '../context/cart';
import { useContext, useState, useEffect } from 'react';

import { addItem, removeItem, adjustQuantity } from '../context/actions';

function ProductDetail({ product }) {

    const { state, dispatch } = useContext(CartContext)
    const [count, setCount] = useState(1)

    const decrementCounter = () => setCount(count - 1);
    const incrementCounter = () => setCount(count + 1);

    useEffect(() => {
        console.log(state)
        console.log(product.stock)
    })

    return (
        <div className="product-info">
            <h4 className="product-title">{ product.name }</h4>
            <p>prijs: {product.prices[0].amount} €</p>
            <div className="btn-container">
                <div className="quantity">
                    <button className="btn quantity-btn" disabled={count === 1} onClick={decrementCounter}>-</button>
                    <p>{ count }</p>
                    <button className="btn quantity-btn" disabled={count === product.stock} onClick={incrementCounter}>+</button>
                </div>
                <button className="btn add-btn" onClick={() => dispatch(addItem(product, count))}>In mandje</button>
            </div>
            <p className="product-description">
                { product.description }
            </p>
            <ul className="plant-list">
                {product.plants.map((plant) => (<Link key={plant.id} href={`/plants/${plant.id}/${plant.name}`}><a><li className="plant-list-item">{plant.name}</li></a></Link>))}
            </ul>
      </div>
    )
}

export default ProductDetail
