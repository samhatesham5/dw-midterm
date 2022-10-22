import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'; 
import { useMemo } from 'react'; 
import { useParams } from 'react-router'; 
import axios from 'axios'; 
import { my_key } from '../my_key.js';

function ListingOST() {
   //This is the rootURL
   //const { track } = useParams;

   //Using cors amywhere to help with http:// trouble
   //If you get a forbidden error, go back to the demo website to get access again. It's a whole thing...
   
   //Pulling URL for musixmatch API
   const rootURL =`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/`;
   const country = "US"; 
   const getTracks = `${rootURL}chart.tracks.get?chart_name=top&page=1&page_size=5&${country}=it&f_has_lyrics=1?apikey=${my_key}`; 

    const [songData, setSongData] = useState([]); 


    useEffect(() => {
        //If get works, then do something
        axios
        .get(`${rootURL}chart.tracks.get?chart_name=top&page=1&page_size=3&country=${country}&f_has_lyrics=1&apikey=${my_key}`)
        .then(function(response) {
            console.log([response]);
            setSongData(response.data);
        })
        .catch((error) => {
            console.log('error', error); 
            setSongData([]);
        });
        //Will pass track into here
     }, []);

     //Creating variables for the data we need
    const {tracks} = useMemo(() => {
        console.log(songData);
        const songBody = songData && songData.body;
        console.log(songBody);
        return { 
            tracks: songBody && songBody.track_list, 
        };
     }, [songData]);

     console.log(tracks);

    return(
        <div>
            <h1>Start of Assign</h1>
        </div> 

    );

}

export default ListingOST; 