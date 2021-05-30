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



// <form className="add-form">
// <button className="btn quantity-btn">-</button>
// <input className="quantity-selector" type="integer" defaultValue=""></input>
// <button className="btn quantity-btn">+</button>
// <button className="btn add-btn"><img className="basket-small" src="/images/basket.svg"></img></button>
// </form>