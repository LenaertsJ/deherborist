

function Searchform({handleClickEvent, handleSubmit, handleChange, options, type}) {

    type === "plants" ? type = "plant" : type = "eigenschap"

    return (
        <div className="search-container">
        <p><span className="search-word">Zoek</span> op basis van <span><button className="btn" onClick={ handleClickEvent }>plant</button></span> of <span><button className="btn" onClick={ handleClickEvent }>medicinale eigenschap</button></span>...</p>
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="select-div">
                <select name="plant" onChange={ handleChange } defaultValue={'DEFAULT'} className="select-field">
                    <option disabled value="DEFAULT" className="select-item">-- selecteer een { type } --</option>
                    {options.map((option) => <option value={option.name} key={option.id} className="select-item">{option.name}</option>)}
                </select> 
            </div>
           
            <button type="submit" className="btn search-btn"><img className="btn-icon" src="/images/mortar-pestle.svg"></img></button>
        </form>
        </div>
    )
}

export default Searchform
