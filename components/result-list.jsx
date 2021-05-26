import Link from "next/link";

function ResultList({result}) {

    return (
        <ul className="result-list">
            {result.map((item, i) => {
            const name = item.name.toLowerCase();
            return (<li className="result-item" id={"item-" + (i + 1)} key={item.id}><Link href={"/plants/" + item.id + "/" + name}><a>{name}</a></Link></li>)})
            
            }
        </ul>
    )
}
 
export default ResultList
