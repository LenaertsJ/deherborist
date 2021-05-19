import Link from "next/link";

function ResultList() {
    return (
        <ul className="result-list">
            <li className="result-item" id="item-1"><Link href="#"><a>Brandnetel</a></Link></li>
            <li className="result-item" id="item-2"><Link href="#"><a>Kamille</a></Link></li>
            <li className="result-item" id="item-3"><Link href="#"><a>Goudsbloem</a></Link></li>
            <li className="result-item" id="item-4"><Link href="#"><a>Roos</a></Link></li>
        </ul>
    )
}

export default ResultList
