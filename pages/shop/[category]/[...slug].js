import { BsFillGrid1X2Fill } from "react-icons/bs";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "../../axios";

import ProductDetail from "../../../components/product-detail";

function Product({ product }) {
  const router = useRouter();

  //COUNTER
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState({});

  const handleCounterClick = (e) => {
    e.preventDefault();
    const min = 0;
    //change this value by available stock
    const max = 4;
    if (e.target.innerText === "+") {
      counter < max ? setCounter(counter + 1) : counter;
    } else {
      counter > min ? setCounter(counter - 1) : counter;
    }
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setCart({
      id: product.id,
      name: product.name,
      price: product.prices[0].amount,
      amount: counter,
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <main className="container">
      <div className="product-inner">
        <div className="left-section">
          <div className="img-container">
            <img src={product.image}></img>
          </div>
        </div>
        <div className="right-section">
          <div className="nav-box">
            <a onClick={() => router.back()}>
              <BsFillGrid1X2Fill />
            </a>
          </div>
          <ProductDetail
            product={product}
            cart={cart}
            handleCounterClick={handleCounterClick}
            handleSubmitClick={handleSubmitClick}
            counter={counter}
          />
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const [id] = context.params.slug;
  const data = await axios(`http://127.0.0.1:8000/api/products/${id}`);
  const product = data.data;

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const data = await axios(`http://127.0.0.1:8000/api/products`);
  const products = data.data["hydra:member"];

  return {
    paths: products.map((product) => ({
      params: {
        category: product.category.name,
        slug: [product.id.toString(), product.name],
      },
    })),
    fallback: "blocking",
    //add revalidate
  };
}

export default Product;
