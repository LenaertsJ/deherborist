//components
import Layout from "../components/layout";
import CartProvider from "../context/cart";

//styles
import "../styles/base.scss";
import "../styles/media-queries.scss";
import "../styles/navbar.scss";
import "../styles/searchform.scss";
import "../styles/result-list.scss";
import "../styles/content-box.scss";
import "../styles/product-card.scss";
import "../styles/product-detail.scss";

//packages
import persistedState from "use-persisted-state";

function MyApp({ Component, pageProps }) {
  //STATES
  // const useCartState = persistedState("cart");
  // const [cart, setCart] = useCartState([]);

  //HANDLERS
  // const handleSubmitClick = (e) => {
  //   e.preventDefault();

  //   const id = parseInt(e.target[0].value);
  //   const name = e.target[1].value;
  //   const price = parseInt(e.target[2].value);
  //   const category = e.target[3].value;
  //   const quantity = parseInt(e.target[5].value);

  //   const selectedProduct = {
  //     id,
  //     name,
  //     price,
  //     category,
  //     quantity,
  //   };
  //   setCart([...cart, selectedProduct]);
  // };

  // const handleRemove = (itemId) => {
  //   setCart(cart.filter((item) => item.id !== itemId));
  // };

  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
