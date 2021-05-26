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
  const plant = await axios
    .get(`http://127.0.0.1:8000/api/plants/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  console.log(plant);

  return {
    props: {
      plant,
    },
  };
}

export async function getStaticPaths() {
  const plants = await axios
    .get(`http://127.0.0.1:8000/api/plants`)
    .then((response) => response.data["hydra:member"])
    .catch((error) => console.log(error));

  return {
    paths: plants.map((plant) => ({
      params: { slug: [plant.id.toString(), plant.name] },
    })),
    fallback: "blocking",
  };
}

export default PlantDetail;
