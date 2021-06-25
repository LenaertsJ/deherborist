import Link from "next/link";
import { useContext } from 'react'
import { CartContext } from "../context/cart";
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {

    const { state:items } = useContext(CartContext);

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
            setQuantity(items.reduce((sum, item) => {
                return sum + item.quantity
            }, 0))
    }, [items])

    return (
        <>
        <div className="nav-container">
            <Link href="/"><a className="main-title">De Herborist</a></Link>
            <div className="logo">
                <img src="/images/logo-herborist.svg" alt="logo"></img>
            </div>
            <div className="full-menu">
                <div className="menu-section">
                    <Link href="/plants"><a>
                        <div className="link">herbarium</div>
                    </a></Link>
                    <Link href="/shop"><a>
                        <div className="link">shop</div>
                    </a></Link>
                </div>
                 <Link href="/shop/cart"><a>
                    <div className="link">cart</div>
                </a></Link>
                <div className="cart-quantity"><p>{ quantity }</p></div>
    
            </div>
            <div className="dropdown">
                <div className="hamburger-menu">
                    < GiHamburgerMenu />
                </div>
                <div className="dropdown-content">
                    <Link href="/plants"><a>
                        <div className="link">herbarium</div>
                    </a></Link>
                    <Link href="/shop"><a>
                        <div className="link">shop</div>
                    </a></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
