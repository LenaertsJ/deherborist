import { useEffect, useState } from 'react';


const axios = require('axios').default;

function Searchform() {

    const [ type, setType ] = useState("plants")
    const [ options, setOptions ] = useState([])

    const handleClickEvent = (e) =>{
        const btnValue = e.target.innerText
        if(btnValue === "plant"){
            setType("plants")
        } else {
            setType("qualities")
        }
    }
    
    useEffect(() =>{
        axios.get(`http://127.0.0.1:8000/api/${type}`)
        .then(response => setOptions(response.data['hydra:member']))
        .catch(error => console.log(error))
    }, [type])


    return (
        <div className="search-container">
        <p><span className="search-word">Search</span> based on <span><button className="btn" onClick={ handleClickEvent }>plant</button></span> or <span><button className="btn" onClick={ handleClickEvent }>medicinal quality</button></span>...</p>
        <form className="search-form">
            <div className="select-div">
                <select name="plant" className="select-field">
                    {options.map((option, i) => <option value={option.name} key={i} className="select-item">{option.name}</option>)}
                    {/* <option value="brandnetel" className="select-item">brandnetel</option>
                    <option value="kamille" className="select-item">kamille</option>
                    <option value="roos" className="select-item">roos</option> */}
                </select> 
            </div>
           
            <button type="submit" className="btn search-btn"><img className="btn-icon" src="/images/mortar-pestle.svg"></img></button>
        </form>
        </div>
    )
}

export default Searchform
