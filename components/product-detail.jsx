import Link from 'next/link';
import Counter from '../components/counter'
import { useEffect } from 'react';

function ProductDetail({product, handleCounterClick, quantity, handleSubmitClick}) {

    // useEffect(()=>{
    //     console.log(product)
    // })
    return (
        <div className="product-info">
            <h4 className="product-title">{ product.name }</h4>
            <p>prijs: {product.prices[0].amount} €</p>
            <form className="to-cart-form" onSubmit={handleSubmitClick}>
                <input type="hidden" name="id" value={product.id} />
                <input type="hidden" name="name" value={product.name} />
                <input type="hidden" name="price" value={product.prices[0].amount} />
                <input type="hidden" name="category" value={product.category.name} />
                <Counter quantity={quantity} handleCounterClick={handleCounterClick}/>
                <button className="btn add-btn" type="submit">In mandje</button>
            </form>
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
