import Link from 'next/link';
import Slugify from 'slugify'

function ProductCard({product, category}) {
    console.log(product)
    return (
        <Link href={`/shop/${category}/${product.id}/${Slugify(product.name, {lower: true, strict: true})}`}>
            <a className="shop-product-link">
                <div className="card">
                    <div className="content-wrapper">
                        <h2 className="product-title">{product.name}</h2>
                        <img className="product-img" src={product.imageUrl}></img>
                        <p>Prijs: {product.prices[0].brutoPrice} euro</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ProductCard



