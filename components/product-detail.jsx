import Link from 'next/link';

function ProductDetail({product, handleCounterClick, counter, handleSubmitClick}) {

    return (
        <div className="product-info">
            <h4 className="product-title">{ product.name }</h4>
            <p>prijs: {product.prices[0].amount} €</p>
            <form className="to-cart-form">
                <button className="btn quantity-btn" onClick={handleCounterClick}>
                    -
                </button>
                <input
                    className="quantity-selector"
                    type="integer"
                    value={counter}
                ></input>
                <button className="btn quantity-btn" onClick={handleCounterClick}>
                    +
                </button>
                <button className="btn add-btn" onClick={handleSubmitClick}>In mandje</button>
            </form>
            <p className="product-description">
                { product.description }
            </p>
            <ul className="plant-list">
                {product.plants.map((plant) => (<Link key={plant.id} href={`/plants/${plant.id}/${plant.name}`}><a><li className="plant-list-item">roos</li></a></Link>))}
            </ul>
      </div>
    )
}

export default ProductDetail
