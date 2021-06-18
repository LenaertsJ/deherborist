import { BsFillGrid1X2Fill } from "react-icons/bs";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "../../../axios";

import ProductDetail from "../../../components/product-detail";

function Product({ product }) {
  const router = useRouter();

  return (
    <main className="container">
      <div className="product-detail-inner">
        <div className="left-section">
          <div className="product-detail-img">
            <img src={product.imageUrl} />
          </div>
        </div>
        <div className="right-section">
          <div className="nav-box">
            <a onClick={() => router.back()}>
              <BsFillGrid1X2Fill className="icon" />
            </a>
          </div>
          <ProductDetail product={product} />
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const [id] = context.params.slug;
  const data = await axios(`products/${id}`);
  const product = data.data;

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios(`products.json`);
  const products = await response.data;

  return {
    paths: products.map((product) => ({
      params: {
        category: product.category.name,
        slug: [product.id.toString(), product.name],
      },
    })),
    fallback: "blocking",
    // revalidate: 86400,
  };
}

export default Product;
