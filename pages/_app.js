//components
import Layout from "../components/layout";

//styles
import "../styles/navbar.scss";
import "../styles/base.scss";
import "../styles/searchform.scss";
import "../styles/result-list.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
