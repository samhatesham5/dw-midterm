import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faFastBackward, faFastForward } from "@fortawesome/free-solid-svg-icons";

function SongCard({ song, artist, picture, genre }) 
    {
    //The card background is supposed to change based on the specific genre of the song
    let backColor = '';
    let textColor = 'black';

    console.log(genre == 'Pop');

    function changeColor(genre) {
        switch (genre) {
            case "Pop":
                backColor = '#F2EEE8'; 
                return backColor;
            case "Jazz":
                backColor = '#492C31'; 
                return backColor;
            case "Latin":
                backColor = '#ffcb68';
                return backColor;
            case "J-Pop":
                backColor = '#d1e5e4';
                return backColor;
            case "Dance":
                backColor = '#413245'; 
                return backColor;
            default:
                backColor = 'white'; 
                return backColor;
    
                
        };
    }

    //Dance and Jazz have a darker background so I set the text color to white for those
    if (changeColor(genre) == "Dance" || changeColor(genre)== "Jazz") {
        function changeText(textColor) {
            return textColor = 'white'; 
        }
    }

    
    return (
        <div style={{backgroundColor: changeColor(genre), color: textColor, }} className="card">
            <div className="image">
                <img src= {picture} alt="Stock Photo Image of a Musician"/>
            </div> 
            <div className ="text"> 
                <p>{song}</p>
                <p>{artist}</p>
            </div>
            {/*This contains all the icons we're using for the fake music player*/}
            <div className = "musicPlayer"> 
                <FontAwesomeIcon className ="backwards" icon={faFastBackward} />
                <FontAwesomeIcon className ="playIcon" icon={faCirclePlay} />
                <FontAwesomeIcon className ="forwards"  icon={faFastForward} />
            </div>
        </div>
    );
}

export default SongCard; 