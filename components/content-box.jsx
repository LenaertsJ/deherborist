import { useState } from 'react';

function ContentBox({plant}) {

  const [content, setContent] = useState("medicinale eigenschappen")

    return (
      <div id="plant-detail" className="content-box">
            <h2 className="content-title">{ content }</h2>
            <div className="content-text">
              <div className="list-container">
                <ul>
                {
                  plant.qualities.map((quality, i) => (
                      <li key={i}>
                        <div className="subtitle-container">
                          <h4> {quality.name} </h4>
                        </div>
                        <div dangerouslySetInnerHTML={{__html:quality.description}}></div>
                      </li>
                  ))
                }
                </ul>
              </div>
            </div>
            <button className="btn btn-next"><img src="/images/arrow.svg"></img></button>
      </div>
    )
}

export default ContentBox
