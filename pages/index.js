import ContentBox from "../components/content-box";

export default function Home() {
  return (
    <main>
      <div className="landingpage">
        <p className="quote">
          "They say we have to nurture our garden, but of course it's our garden
          that nurtures us..."
        </p>
      </div>
      <div id="site-overview">
        <div class="overview-section">
          <img src="/images/bundo-kim.jpeg" className="overview-img"></img>
          <div className="overview-box">
            <p className="overview-text">
              Lorem ipsum dolor sit amet, consectetur adipis.Lorem ipsum dolor
              sit amet, consectetur adipis Lorem ipsum dolor sit amet,
              consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis
              Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor
              sit amet, consectetur adipis. Lorem ipsum dolor sit amet,
              consectetur adip Lorem ipsum dolor sit amet, consectetur adipis
              Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor
              sit amet, consectetur adipis Lorem ipsum dolor sit amet,
              consectetur adipis.
            </p>
          </div>
        </div>
        <div class="overview-section">
          <img src="/images/pressed_flower.jpg" className="overview-img"></img>
          <div className="overview-box">
            <p className="overview-text">
              Lorem ipsum dolor sit amet, consectetur adipis.Lorem ipsum dolor
              sit amet, consectetur adipis Lorem ipsum dolor sit amet,
              consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis
              Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor
              sit amet, consectetur adipis. Lorem ipsum dolor sit amet,
              consectetur adip Lorem ipsum dolor sit amet, consectetur adipis
              Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor
              sit amet, consectetur adipis Lorem ipsum dolor sit amet,
              consectetur adipis.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
