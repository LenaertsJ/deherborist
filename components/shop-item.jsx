import Link from 'next/link';

function ShopItem() {
    return (
        <Link href="/shop/infusies/name">
            <a className="shop-item-link">
                <div className="card">
                    <div className="content-wrapper">
                        <h2 className="item-title">Morning Dew</h2>
                        <img className="item-img" src="/images/gareth-hubbard.jpeg"></img>
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