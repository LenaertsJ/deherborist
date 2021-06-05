import ProductCard from "../../../components/product-card";
import axios from "../../../axios";
import { useRouter } from "next/router";

function ShopSection({ products }) {
  const router = useRouter();
  const category = router.query.category;

  return (
    <main className="container">
      <div className="hero">
        {category === "infusies" ? (
          <img className="shop-section-img" src="/images/lisa-hobbs.jpg"></img>
        ) : (
          <img
            className="shop-section-img"
            src="/images/micheile-henderson.jpeg"
          ></img>
        )}
        <h1 className="section-title">{category}</h1>
      </div>
      <div className="shop-overview">
        <div className="items-wrapper">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const [category] = context.params.category;
  const data = await axios(`products?category.name=${category}`);
  const products = data.data["hydra:member"];

  return {
    props: {
      products,
    },
  };
}

export async function getStaticPaths() {
  const data = await axios(`categories`);
  const categories = data.data["hydra:member"];

  return {
    paths: categories.map((category) => ({
      params: { category: category.name },
    })),
    fallback: "blocking",
    //add revalidate
  };
}

export default ShopSection;
