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
            <div className="hamburger-menu">
                <div className="line line-top"></div>
                <div className="line line-middle"></div>
                <div className="line line-bottom"></div>
            </div>
        </div>
        </>
    )
}

export default Navbar
