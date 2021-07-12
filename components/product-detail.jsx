    import Link from 'next/link';
import { CartContext } from '../context/cart';
import { useContext, useState, useEffect } from 'react';

import { addItem } from '../context/actions';

function ProductDetail({ product }) {

    const { state = null, dispatch } = useContext(CartContext)
    const [count, setCount] = useState(1)
    const [message, setMessage] = useState("")

    const decrementCounter = () => setCount(count - 1);
    const incrementCounter = () => setCount(count + 1);

    const addToCart = () => {
        dispatch(addItem(product, count))
        setMessage("Product werd toegevoegd aan je mandje!")
    }

    return (
        <div className="product-info">
            <h4 className="product-title">{ product.name }</h4>
            <p className="product-price">prijs: {product.prices[0].brutoPrice} €</p>
            {message && <p className="success-msg">{message}</p>}
            {product.stock === 1 && !message && <p className="stock-msg">Nog maar één beschikbaar...</p>}
            {product.stock === 0 && <p className="stock-msg">Dit product is helaas uitverkocht...</p>}
            <div className="btn-container">    
                <div className="counter">
                    <button className="btn quantity-btn" disabled={count === 1} onClick={decrementCounter}>-</button>
                    <p>{ count }</p>
                    <button className="btn quantity-btn" disabled={count === product.stock} onClick={incrementCounter}>+</button>
                </div>
                <button className="btn add-btn" onClick={addToCart}>In mandje</button>
            </div>
            <div className="product-description" dangerouslySetInnerHTML={{__html: product.description}}>
            </div>
            <ul className="plant-list">
                {product.plants.map((plant) => (<Link key={plant.id} href={`/plants/${plant.id}/${plant.name}`}><a><li className="plant-list-item">{plant.name}</li></a></Link>))}
            </ul>
      </div>
    )
}

export default ProductDetail
