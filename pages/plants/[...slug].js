import Contentbox from "../../components/plant-info";
import axios from "../../axios";

function PlantDetail({ plant }) {
  return (
    <main className="container">
      <div id="plant-detail" className="inner-container">
        <div id="detail-img" class="image-container-vertical">
          <img src={plant.imageUrl} />
        </div>
        <div className="content-container">
          <Contentbox plant={plant} />
          <a href="#symbolism">
            <div className="arrow-container">
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
    // revalidate: 86400,
  };
}

export default PlantDetail;
