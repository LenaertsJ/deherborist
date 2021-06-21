import CheckoutForm from "../../components/checkout-form";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { useEffect, useState } from "react";

const SignupForm = () => {
  const { state: items, dispatch } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const [success, setSucces] = useState(false);

  useEffect(() => {
    setTotalPrice(
      items.reduce((sum, item) => {
        return sum + item.totalPrice;
      }, 0)
    );
  }, [items]);

  return (
    <main className="container">
      <div className="checkout-inner">
        {success && (
          <div className="succes-msg">
            Bedankt, jouw bestelling is geplaatst!
          </div>
        )}
        {!success && (
          <div className="checkout-overview">
            <div className="title-container">
              <h3>Je bestelling:</h3>
            </div>

            <ul className="checkout-wrapper">
              {items.map((item, i) => (
                <li key={i} className="text-container">
                  <p>{item.product.name}:</p>
                  <div className="text-container">
                    <p>{item.quantity} x </p>
                    <p>{item.product.price} €</p>
                  </div>
                </li>
              ))}
              {items.length > 0 && !success && (
                <li className="text-container total">
                  <p>Totaal:</p>
                  <p>{totalPrice} €</p>
                </li>
              )}
              {items.length === 0 && (
                <>
                  <div className="msg">Je mandje is nog leeg...</div>
                  <img src="/images/logo-herborist.svg" />
                </>
              )}
            </ul>
          </div>
        )}
        <CheckoutForm
          items={items}
          totalPrice={totalPrice}
          dispatch={dispatch}
          setSuccess={setSucces}
        />
      </div>
    </main>
  );
};

export default SignupForm;
