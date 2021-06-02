//components
import Layout from "../components/layout";

//styles
import "../styles/navbar.scss";
import "../styles/base.scss";
import "../styles/searchform.scss";
import "../styles/result-list.scss";
import "../styles/content-box.scss";
import "../styles/shop-item.scss";
import "../styles/product-detail.scss";

//packages
import persistedState from "use-persisted-state";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  //STATES
  // const useQuantityState = persistedState("quantity");
  const useCartState = persistedState("cart");

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useCartState([]);

  //HANDLERS
  const handleCounterClick = (e) => {
    e.preventDefault();
    const min = 0;
    //change this value by available stock
    const max = 4;
    if (e.target.innerText === "+") {
      quantity < max ? setQuantity(quantity + 1) : quantity;
    } else {
      quantity > min ? setQuantity(quantity - 1) : quantity;
    }
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const id = parseInt(e.target[0].value);
    const name = e.target[1].value;
    const price = parseInt(e.target[2].value);
    const selectedProduct = {
      id,
      name,
      price,
      quantity,
    };
    setCart([...cart, selectedProduct]);
  };

  return (
    <Layout>
      <Component
        {...pageProps}
        handleSubmitClick={handleSubmitClick}
        handleCounterClick={handleCounterClick}
        quantity={quantity}
        cart={cart}
      />
    </Layout>
  );
}

export default MyApp;
