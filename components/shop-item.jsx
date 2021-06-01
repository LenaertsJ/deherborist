import Link from 'next/link';
import Slugify from 'slugify'

function ShopItem({item, category}) {
    return (
        <Link href={`/shop/${category}/${item.id}/${Slugify(item.name, {lower: true, strict: true})}`}>
            <a className="shop-item-link">
                <div className="card">
                    <div className="content-wrapper">
                        <h2 className="item-title">{item.name}</h2>
                        <img className="item-img" src={item.image}></img>
                        <p>Prijs: {item.prices[0].amount} euro</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ShopItem



