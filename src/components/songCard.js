import React from 'react';

function SongCard({
    song,
    artist,
    picture,
    }) 
    {
    return (
        <div className="card">
            <div className="image">
                <img src= {picture} alt="random image"/>
            </div> 
            <div className ="text"> 
                <p>{song}</p>
                <p>{artist}</p>
            </div>
        </div>
    );
}

export default SongCard; 