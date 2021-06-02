import { useEffect } from "react";
import Counter from "../../components/counter";
import { TiDeleteOutline } from "react-icons/ti";
// import { VscArrowDown } from "react-icons/vsc";

function Cart({ cart, quantity, handleCounterClick }) {
  useEffect(() => {
    console.log(cart);
  });
  return (
    <main className="container">
      <div className="inner-cart">
        <h3 className="cart-title">
          <span>m</span>andje
        </h3>
        <div class="cart-content flex">
          {cart.map((cartItem) => {
            return (
              <div className="cart-products flex">
                <div className="product-details">
                  <h4 className="product-title">Product: {cartItem.name}</h4>
                  <p className="product-category">Type: infusies</p>
                </div>
                <div className="product-price flex">
                  <p className="quantity">Aantal: {cartItem.quantity}</p>
                  <p className="price">Prijs: {cartItem.price} €</p>
                  <TiDeleteOutline className="icon" />
                </div>
              </div>
            );
          })}

          <div className="cart-totals flex">
            <p className="quantity">Totaal aantal: 2</p>
            <p className="price">Totale prijs: 9 €</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
