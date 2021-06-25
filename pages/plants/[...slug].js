import PlantInfo from "../../components/plant-info";
import axios from "../../axios";
import { useEffect } from "react";

function PlantDetail({ plant }) {
  useEffect(() => console.log(plant));

  const handleScrollClick = () => {};

  return (
    <main className="container">
      <div id="plant-detail" className="inner-container">
        <div id="detail-img" className="image-container-vertical">
          <img src={plant.imageUrl} alt={plant.name} />
        </div>
        <div className="content-container">
          <PlantInfo plant={plant} />
          <a href="#symbolism">
            <div className="arrow-container" onClick={handleScrollClick}>
              <div className="arrow-tag">scroll</div>
              <div className="arm left-arm"></div>
              <div className="arm right-arm"></div>
              <div className="stem"></div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps(context) {
  const [id] = context.params.slug;
  const data = await axios(`plants/${id}`);
  const plant = data.data;

  return {
    props: {
      plant,
    },
    revalidate: 86400,
  };
}

export async function getStaticPaths() {
  const data = await axios(`plants`);
  const plants = data.data["hydra:member"];

  return {
    paths: plants.map((plant) => ({
      params: { slug: [plant.id.toString(), plant.name] },
    })),
    fallback: "blocking",
  };
}

export default PlantDetail;
