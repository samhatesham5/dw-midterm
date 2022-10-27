import react from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Landing({country}) {
    let state = "";
    if (country == "US") 
        state = "the US";
    else
        state = country;


    return (
        <div className="wholeLanding">
            <h1>the top 3 songs in {state}...</h1>
            <div className = "blurb">
                <h3>(drum roll please)</h3>
            </div>
            <div className= "downArrow">
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
           
        </div>
    )
}

export default Landing; 