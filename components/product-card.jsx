import Link from 'next/link';
import Slugify from 'slugify';
import Image from 'next/image';

function ProductCard({product, category}) {
    return (
        <Link href={`/shop/${category}/${product.id}/${Slugify(product.name, {lower: true, strict: true})}`}>
            <a className="shop-product-link">
                <div className="card">
                    <div className="product-img">
                        <Image src={product.imageUrl} alt={product.name} layout="responsive" width="100%" height="100"  />
                    </div>
                    {/* <img className="product-img" src={`${product.imageUrl}&cropratio=4:3`} alt={product.name}/> */}
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



