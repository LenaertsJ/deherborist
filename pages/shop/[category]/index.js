import ProductCard from "../../../components/product-card";
import axios from "../../../axios";
import { useRouter } from "next/router";

function ShopSection({ products }) {
  const router = useRouter();
  const category = router.query.category;

  return (
    <main className="container">
      <div className="hero">
        <div className="border-outer">
          <div className="border-inner">
            <h1 className="category">{category}</h1>
          </div>
        </div>
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
  const data = await axios(`products?category.name=${category}&stock[gt]=0`);
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
    // revalidate: 86400,
  };
}

export default ShopSection;
