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

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
