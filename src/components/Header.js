import React from 'react';

//Creating our navigation
function Header() {
    return (
        <div className= "navBar">
        <h1 className= "name">Name + Logo </h1>
           <div className= "links"> 
            <a href="#">UNITED STATES</a>
            <a href="#">CANADA</a>
            <a href="#">MEXICO</a>
            <a href="#">TOKYO</a>
           </div>
        </div>

    );
};

export default Header;