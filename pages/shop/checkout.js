import CheckoutForm from "../../components/checkout-form";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

const SignupForm = () => {
  const { state: items } = useContext(CartContext);
  console.log(items);

  return (
    <main className="container">
      <div className="checkout-inner">
        <div className="checkout-overview">
          <div className="title-container">
            <h3>Je bestelling:</h3>
          </div>

          <div class="checkout-wrapper">
            {items.map((item) => (
              <div className="text-container">
                <p>{item.product.name}:</p>
                <div class="text-container">
                  <p>{item.quantity} x </p>
                  <p>{item.product.price} €</p>
                </div>
              </div>
            ))}
            <div className="text-container total">
              <p>Totaal:</p>
              <p>13 €</p>
            </div>
          </div>
        </div>
        <CheckoutForm cart={items} />
      </div>
    </main>
  );
};

export default SignupForm;
