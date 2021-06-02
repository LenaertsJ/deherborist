import { BsFillGrid1X2Fill } from "react-icons/bs";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "../../axios";

import ProductDetail from "../../../components/product-detail";

function Product({ product, handleSubmitClick, cart }) {
  const router = useRouter();

  //STATES
  const [quantity, setQuantity] = useState(1);

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
            handleCounterClick={handleCounterClick}
            handleSubmitClick={handleSubmitClick}
            quantity={quantity}
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
