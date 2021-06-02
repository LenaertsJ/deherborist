import { useEffect } from "react";
import Counter from "../../components/counter";

// import { VscArrowDown } from "react-icons/vsc";
import CartItem from "../../components/cart-item";

function Cart({ cart, handleRemove }) {
  // useEffect(() => {
  //   console.log(cart);
  // });
  return (
    <main className="container">
      <div className="inner-cart">
        <h3 className="cart-title">
          <span>m</span>andje
        </h3>
        {cart.length > 0 && (
          <div className="cart-content flex">
            {cart.map((cartItem) => {
              return (
                <CartItem
                  cartItem={cartItem}
                  handleRemove={handleRemove}
                  key={cartItem.id}
                />
              );
            })}

            <div className="cart-totals flex">
              <p className="quantity">Totaal aantal: 2</p>
              <p className="price">Totale prijs: 9 €</p>
            </div>
          </div>
        )}
        {cart.length === 0 && <p>Jouw mandje is nog leeg...</p>}
      </div>
    </main>
  );
}

export default Cart;
