import { useEffect, useState, useContext } from "react";
import CartItem from "../../components/cart-item";
import { CartContext } from "../../context/cart";
import Link from "next/link";

function Cart() {
  const { state: items } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantity, setTotalQuantity] = useState();

  useEffect(() => {
    const sum = items.reduce((sum, item) => {
      return sum + item.totalPrice;
    }, 0);
    setTotalPrice(sum);

    const sumQuantity = items.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
    setTotalQuantity(sumQuantity);
  }, [items]);

  return (
    <main className="container">
      <div className="inner-cart">
        <h3 className="cart-title">
          <span>m</span>andje
        </h3>
        {items.length > 0 && (
          <div className="cart-content flex">
            {items.map((item) => {
              return (
                <CartItem
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                />
              );
            })}
            <div className="cart-totals flex">
              <p className="quantity">Totaal aantal: {totalQuantity}</p>
              <p className="price">Totale prijs: {totalPrice} €</p>
            </div>
          </div>
        )}
        {items.length === 0 && (
          <p className="empty-msg">Jouw mandje is nog leeg...</p>
        )}
        <Link href="/shop/checkout">
          <button className="btn btn-checkout">Checkout</button>
        </Link>
      </div>
    </main>
  );
}

export default Cart;
