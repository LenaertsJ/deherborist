import Menu from "react-burger-menu/lib/menus/slide";
import Link from "next/link";

function Navbar() {

    return (
        <>
        <div className="nav-container">
            <Link href="/"><a className="main-title">De Herborist</a></Link>
            <div className="logo">
                <img src="/images/logo-herborist.svg"></img>
            </div>
            <div className="menu">
                <Link href="/plants"><a>
                    <div className="link">herbarium</div>
                </a></Link>
                <Link href="/shop"><a>
                    <div className="link">shop</div>
                </a></Link>
                <Link href="/shop/cart"><a>
                    <div className="link">cart</div>
                </a></Link>
            </div>
        </div>
        {/* <Menu right width={'400px'}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="home" className="menu-item" href="#about">About</a>
            <a id="home" className="menu-item" href="/plants">Herbarium</a>
            <a id="home" className="menu-item" href="/shop">Shop</a>
        </Menu> */}
        </>
    )
}

export default Navbar
