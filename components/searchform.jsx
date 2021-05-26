

function Searchform({handleClickEvent, handleSubmit, handleChange, options}) {

    return (
        <div className="search-container">
        <p><span className="search-word">Search</span> based on <span><button className="btn" onClick={ handleClickEvent }>plant</button></span> or <span><button className="btn" onClick={ handleClickEvent }>medicinal quality</button></span>...</p>
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="select-div">
                <select name="plant" onChange={ handleChange } className="select-field">
                    <option disabled selected className="select-item">-- select an option --</option>
                    {options.map((option) => <option value={option.name} key={option.id} className="select-item">{option.name}</option>)}
                </select> 
            </div>
           
            <button type="submit" className="btn search-btn"><img className="btn-icon" src="/images/mortar-pestle.svg"></img></button>
        </form>
        </div>
    )
}

export default Searchform
