import { GiPestleMortar } from "react-icons/gi";

function Searchform({handleOptionChange, handleSubmit, handleChange, options, type}) {

    type === "plants" ? type = "plant" : type = "eigenschap"

    return (
        <div className="search-container">
        {/* <p><span className="search-word">Zoek</span> op basis van <span><button className="btn" onClick={ handleOptionChange }>plant</button></span> of <span><button className="btn" onClick={ handleOptionChange }>medicinale eigenschap</button></span>...</p> */}
            <p><span className="search-word">Zoek</span> op basis van...</p>
            <form className="options">
                <input type="radio" value="plants" className="radio-btn" name="search-option" onChange={handleOptionChange}/><label htmlFor="plants" className="radio-label">plant</label>
                <input type="radio" value="medicinal" className="radio-btn" name="search-option" onChange={handleOptionChange}/><label htmlFor="medicinal" className="radio-label">medicinale eigenschap</label>
            </form>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="select-div">
                    <select name="plant" onChange={ handleChange } defaultValue={'DEFAULT'} className="select-field">
                        <option disabled value="DEFAULT" className="select-item">-- selecteer een { type } --</option>
                        {options.map((option) => <option value={option.name} key={option.id} className="select-item">{option.name}</option>)}
                    </select> 
                </div>
            
                <button type="submit" className="btn search-btn"><GiPestleMortar className="icon"/></button>
            </form>
        </div>
    )
}

export default Searchform
