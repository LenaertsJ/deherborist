import { useEffect, useState } from "react";
import persistedState from "use-persisted-state";

import ResultList from "../components/result-list";
import Searchform from "../components/searchform";

import axios from "../axios";

function Plants() {
  //STATES
  const useResultState = persistedState("result");

  const [type, setType] = useState("plants");
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [result, setResult] = useResultState([]);

  //STORAGE
  // useEffect(() => {
  //   console.log(result);
  // }, [result]);

  //FETCH
  useEffect(() => {
    axios
      .get(`/${type}`)
      .then((response) => setOptions(response.data["hydra:member"]))
      .catch((error) => console.log(error));
  }, [type]);

  //HANDLERS
  const handleClickEvent = (e) => {
    const btnValue = e.target.innerText;
    if (btnValue === "plant") {
      setType("plants");
    } else {
      setType("qualities");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  /**
   *
   * refactor handleSubmit
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "plants") {
      axios
        .get(`plants?name=${value}`)
        .then((response) => setResult(response.data["hydra:member"]))
        .catch((error) => console.log(error));
    } else {
      axios
        .get(`qualities?name=${value}`)
        .then((response) =>
          setResult(response.data["hydra:member"][0]["plants"])
        )
        .catch((error) => console.log(error));
    }
  };

  return (
    <main className="container">
      <div id="herbarium" className="inner-container">
        <div id="herbarium-img" className="image-container-vertical">
          <img src="/images/nathan-dumlao.jpeg" />
        </div>
        <h2 id="herbarium-title">herbarium</h2>
        {result.length > 0 && <ResultList result={result} />}
        <Searchform
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
          handleClickEvent={handleClickEvent}
          options={options}
          type={type}
        />
      </div>
    </main>
  );
}

export default Plants;
