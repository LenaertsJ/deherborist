import { useEffect, useState } from "react";

const axios = require("axios").default;

import ResultList from "../components/result-list";
import Searchform from "../components/searchform";

function Plants() {
  const [type, setType] = useState("plants");
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

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
    console.log(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/${type}`)
      .then((response) => setOptions(response.data["hydra:member"]))
      .catch((error) => console.log(error));
  }, [type]);

  //TODO : REFACTOR THIS

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "plants") {
      axios
        .get(`http://127.0.0.1:8000/api/plants?name=${value}`)
        .then((response) => setResult(response.data["hydra:member"]))
        .catch((error) => console.log(error));
    } else {
      axios
        .get(`http://127.0.0.1:8000/api/qualities?name=${value}`)
        .then((response) =>
          setResult(response.data["hydra:member"][0]["plants"])
        )
        .catch((error) => console.log(error));
    }
  };

  // useEffect(() => {
  //   console.log(result);
  // }, [result]);

  return (
    <main className="container">
      <div className="inner-container">
        <img src="/images/nathan-dumlao.jpeg" className="herbarium-img"></img>
        <h2 className="page-title herbarium-title">herbarium</h2>
        {result.length > 0 && <ResultList result={result} />}
        <Searchform
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
          handleClickEvent={handleClickEvent}
          options={options}
        />
      </div>
    </main>
  );
}

export default Plants;
