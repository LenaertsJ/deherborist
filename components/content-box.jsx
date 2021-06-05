import { useState } from 'react';

function ContentBox({plant}) {

  const [content, setContent] = useState("medicinale eigenschappen")

    return (
      <div className="content-box">
            <h2 className="content-title">{ content }</h2>
            <div className="content-text">
              <ul>
              {
                plant.qualities.map((quality, i) => (
                    <li key={i}>
                      <h4> {quality.name} </h4>
                      <p> {quality.description} </p>
                    </li>

                ))
              }
              </ul>
            </div>
            <button className="btn btn-next"><img src="/images/arrow.svg"></img></button>
      </div>
    )
}

export default ContentBox
