import ResultList from "../components/result-list";
import Searchform from "../components/searchform";

function Plants() {
  return (
    <main className="container">
      <div className="inner-container">
        <img src="/images/nathan-dumlao.jpeg" className="herbarium-img"></img>
        <h2 className="page-title herbarium-title">herbarium</h2>
        <ResultList />
        <Searchform />
      </div>
    </main>
  );
}

export default Plants;
