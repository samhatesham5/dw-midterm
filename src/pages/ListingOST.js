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
            setSongData(response.data.message.body); 
        })
        .catch((error) => {
            console.log('error', error); 
            setSongData([]);
        });
        //Will pass track into here
     }, []);

         /*
    //Pull album cover
     const [albumData, setAlbumData] = useState([]); 

     useEffect(() => {
        axios
        .get(`${rootURL}artist.albums.get?artist_id=${albumId}&apikey=${my_key}`)


     }, []);
*/ 

     //Creating variables for the data we need (the artist id and the track name)
    const 
    { 
        tracks, 
        songOne, 
        songTwo, 
        songThree, 
        artists,
        albumId, 
    } = useMemo(() => {

        return { 
            tracks: songData.track_list, 
            songOne: songData.track_list && songData.track_list[0].track.track_name, 
            songTwo: songData.track_list && songData.track_list[1].track.track_name, 
            songThree: songData.track_list && songData.track_list[2].track.track_name,
            artists: songData.track_list && [songData.track_list[0].track.artist_name, songData.track_list[1].track.artist_name, songData.track_list[2].track.artist_name],
            albumId: songData.track_list && [songData.track_list[0].track.album_id, songData.track_list[1].track.album_id, songData.track_list[2].track.album_id],
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