import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faFastBackward, faFastForward } from "@fortawesome/free-solid-svg-icons";

function SongCard({ song,artist, picture, }) 
    {
    //The song background will change based on the genre
    return (
       
        <div className="card">
            <div className="image">
                <img src= {picture} alt="Stock Photo Image of a Musician"/>
            </div> 
            <div className ="text"> 
                <p>{song}</p>
                <p>{artist}</p>
            </div>
            <div className = "musicPlayer"> 
                <FontAwesomeIcon className ="backwards" icon={faFastBackward} />
                <FontAwesomeIcon className ="playIcon" icon={faCirclePlay} />
                <FontAwesomeIcon className ="forwards"  icon={faFastForward} />
            </div>
        </div>
    );
}

export default SongCard; 