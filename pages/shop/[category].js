import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import ShopItem from "../../components/shop-item";
import axios from "axios";
import { useRouter } from "next/router";

function ShopSection({ items }) {
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
          {items.map((item) => (
            <ShopItem key={item.id} item={item} category={category} />
          ))}
          {/* <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem /> */}
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const [category] = context.params.category;
  const items = await axios
    .get(`http://127.0.0.1:8000/api/products?category.name=${category}`)
    .then((response) => response.data["hydra:member"])
    .catch((error) => console.log(error));
  // console.log(items);

  return {
    props: {
      items,
    },
  };
}

export async function getStaticPaths() {
  const categories = await axios
    .get(`http://127.0.0.1:8000/api/categories`)
    .then((response) => response.data["hydra:member"])
    .catch((error) => console.log(error));

  return {
    paths: categories.map((category) => ({
      params: { category: category.name },
    })),
    fallback: "blocking",
  };
}

export default ShopSection;
