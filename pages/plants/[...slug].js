import Contentbox from "../../components/content-box";
import axios from "axios";

function PlantDetail({ plant }) {
  return (
    <main className="container">
      <div className="inner-container">
        <img className="plant-img" src={plant.image}></img>
        <Contentbox plant={plant} />
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const [id] = context.params.slug;
  const data = await axios(`http://127.0.0.1:8000/api/plants/${id}`);
  const plant = data.data;

  return {
    props: {
      plant,
    },
  };
}

export async function getStaticPaths() {
  const data = await axios(`http://127.0.0.1:8000/api/plants`);
  const plants = data.data["hydra:member"];

  return {
    paths: plants.map((plant) => ({
      params: { slug: [plant.id.toString(), plant.name] },
    })),
    fallback: "blocking",
    //add revalidate
  };
}

export default PlantDetail;
