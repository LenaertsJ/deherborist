import ShopItem from "../../components/shop-item";

function ShopSection() {
  return (
    <main className="container">
      <div className="hero">
        <img className="shop-section-img" src="/images/lisa-hobbs.jpg"></img>
      </div>
      <div className="shop-overview">
        <div class="items-wrapper">
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
        </div>
      </div>
    </main>
  );
}

export default ShopSection;
