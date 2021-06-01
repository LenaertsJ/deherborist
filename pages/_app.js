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

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
