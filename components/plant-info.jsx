import { useState, useEffect } from 'react';
import Link from 'next/link';

function ContentBox({plant}) {


  useEffect(() =>  console.log(plant))
  const [content, setContent] = useState("medicinale eigenschappen")

    return (
      <div className="inner-content">
        <div className="text-container">
          <div className="flex">
            <div className="subtitle-container">
              <h2 className="content-title">{ content }</h2>
            </div>
              <div className="list-container">
                <ul className="list list-qualities">
                  {plant.qualities.map((quality, i) => (
                    <li key={i}>
                      <p className="text">{quality.name}</p>
                    </li>
                  ))}
                </ul>
                <div dangerouslySetInnerHTML={{__html:plant.medicinalInfo}}></div>
              </div>
          </div>
            <div id="symbolism" className="text-container symboliek">
              <div className="subtitle-container ">
                <h2>symboliek</h2>
              </div>
              <div dangerouslySetInnerHTML={{__html:plant.symbolism}}></div>
            </div>
            <div id="products" className="text-container">
              <div className="subtitle-container ">
                <h2>products</h2>
  
              </div>
              <p className="text">Hieronder een lijst van kunstwerkjes en infusies waarin deze plant verwerkt werd:</p>
              <ul className="list">
                {plant.products.map((product, i) => <li key={i}><Link href="#"><a>{product.name}</a></Link></li>)}
              </ul>
            </div>
          </div>

      </div>
    )
}

export default ContentBox
