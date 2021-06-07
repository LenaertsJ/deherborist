import CheckoutForm from "../../components/checkout-form";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

const SignupForm = () => {
  const { state: items } = useContext(CartContext);
  console.log(items);

  return (
    <main className="container">
      <div className="checkout-inner">
        <div className="content-container">
          <div className="title-container">
            <h3>Je bestelling:</h3>
          </div>
          <div className="text-container">
            {items.map((item) => (
              <p>
                {item.product.name}: <span>{item.quantity}</span>
              </p>
            ))}
          </div>
          <div className="text-container">
            <p>Totaal:{}</p>
          </div>
        </div>
        <CheckoutForm cart={items} />
      </div>
    </main>
  );
};

export default SignupForm;
