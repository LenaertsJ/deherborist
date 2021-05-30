import { useState } from 'react';

function ContentBox({plant}) {

  const [content, setContent] = useState("medicinale eigenschappen")

    return (
      <div className="content-box">
            <h2 className="content-title">{ content }</h2>
            <p className="content-text">
              {
                plant.qualities.map((quality) => (
                  <ul>
                    <li>
                      <h4> {quality.name} </h4>
                      <p> {quality.description} </p>
                    </li>
                  </ul>
                ))
              }
            </p>
            <button className="btn btn-next"><img src="/images/arrow.svg"></img></button>
      </div>
    )
}

export default ContentBox
