import Link from 'next/link';
import Slugify from 'slugify'

function ProductCard({product, category}) {
    return (
        <Link href={`/shop/${category}/${product.id}/${Slugify(product.name, {lower: true, strict: true})}`}>
            <a className="shop-product-link">
                <div className="card">
                    <img className="product-img" src={`${product.imageUrl}&cropratio=4:3`} alt={product.name}/>
                    <div className="info-container">
                        <h2 className="product-title">{product.name}</h2>
                        <p>Prijs: {product.prices[0].brutoPrice} euro</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ProductCard



