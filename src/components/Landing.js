import react from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

//Creating our landing page (user will scroll down for the results)
function Landing({country}) {
    //Saying "the top 3 song in US" doesn't sound right, so I'm fixing it
    let state = "";
    //if it is the US, add "the" in front
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