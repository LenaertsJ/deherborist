

function Searchform() {
    return (
        <div className="search-container">
        <p><span className="search-word">Search</span> based on <span><button className="btn">plant</button></span> or <span><button className="btn">medicinal quality</button></span>...</p>
        <form className="search-form">
            <div className="select-div">
                <select name="plant" className="select-field">
                    <option value="brandnetel" className="select-item">brandnetel</option>
                    <option value="kamille" className="select-item">kamille</option>
                    <option value="roos" className="select-item">roos</option>
                </select> 
            </div>
           
            <button type="submit" className="btn search-btn"><img className="btn-icon" src="/images/mortar-pestle.svg"></img></button>
        </form>
        </div>
    )
}

export default Searchform
