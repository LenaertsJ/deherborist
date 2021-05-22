import Contentbox from "../../components/content-box";

function PlantDetail() {
  return (
    <main className="container">
      <div className="inner-container">
        <img className="plant-img" src="/images/nettle_drawing.jpeg"></img>
        <h1 className="plant-title">Brandnetel</h1>
        <Contentbox />
      </div>
    </main>
  );
}

export default PlantDetail;
