import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

//Creating our navigation
function Header() {
    return (
        <div className= "navBar">
            <div className="nameLogo">
                <FontAwesomeIcon className="logo" icon={faMusic} />
                <h1 className= "name">Name</h1>
            </div>
           <div className= "links"> 
            <a href="/?country=US">UNITED STATES</a>
            <a href="/?country=CA">CANADA</a>
            <a href="/?country=MX">MEXICO</a>
            <a href="/?country=JP">JAPAN</a>
           </div>
        </div>

    );
};

export default Header;