import Link from "next/link";
import Slugify from "slugify";

function ResultList({result}) {

    return (
        <ul className="result-list">
            {result.map((item, i) => {
            const name = item.name.toLowerCase();
            return (<li className="result-item" id={"item-" + (i + 1)} key={item.id}><Link href={"/plants/" + item.id + "/" + Slugify(name, {lower:true, strict:true})}><a>{name}</a></Link></li>)})
            
            }
        </ul>
    )
}
 
export default ResultList
