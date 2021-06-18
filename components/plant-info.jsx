import { useState } from 'react';

function ContentBox({plant}) {

  const [content, setContent] = useState("medicinale eigenschappen")

    return (
      <div className="inner-content">
        <div className="text-container">
          <div className="flex">
            <div className="subtitle-container">
              <h2 className="content-title">{ content }</h2>
            </div>
              <div className="list-container">
                <ul>
                  <li>
                    <h4 className="subtitle-container">Rustgevend</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  </li>
                  {/* <li>
                    <h4 className="subtitle-container">Rustgevend</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum ex quam totam nesciunt corrupti blanditiis laborum! Voluptatibus atque molestias nostrum, soluta tempora voluptate consequuntur?</p>
                  </li>
                  <li>
                    <h4 className="subtitle-container">Rustgevend</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum ex quam totam nesciunt corrupti blanditiis laborum! Voluptatibus atque molestias nostrum, soluta tempora voluptate consequuntur?</p>
                  </li> */}
                {/* {
                  plant.qualities.map((quality, i) => (
                      <li key={i}>
                        <h4 className="subtitle-container"> {quality.name} </h4>
                        <div dangerouslySetInnerHTML={{__html:quality.description}}></div>
                      </li>
                  ))
                } */}
                </ul>
              </div>
          </div>
            <div id="symbolism" className="text-container symboliek">
              <div className="subtitle-container ">
                <h2>symboliek</h2>
              </div>
              <div dangerouslySetInnerHTML={{__html:plant.symbolism}}></div>
              {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatibus hic culpa vel ut voluptas ea expedita quod? Omnis ipsa tempora ex inventore voluptatum, molestias vero. Deleniti amet fuga magni ducimus dolore odit provident, deserunt libero cum rerum dolores reprehenderit, voluptates id. Doloremque recusandae nulla optio, ducimus sint ipsam pariatur numquam assumenda illum laboriosam magnam totam aspernatur, architecto suscipit qui quo tenetur laudantium deleniti vero iure sequi veniam. Eveniet repellat dicta saepe rerum, assumenda architecto labore ullam exercitationem itaque quod esse placeat sunt minus animi quia est cumque veniam eligendi rem enim iure beatae ipsam. Commodi alias tenetur consequuntur! Rerum.</p> */}
            </div>
          </div>

      </div>
    )
}

export default ContentBox
