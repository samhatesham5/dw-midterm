import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'; 
import { useMemo } from 'react'; 
import { useParams } from 'react-router'; 
import axios from 'axios'; 
import { my_key }  from '../my_key.js';
import { picKey } from '../my_key.js'; 
import SongCard from '../components/SongCard.js'; 

function ListingOST() {
   //This is the rootURL
   //const { track } = useParams;

   //Using cors amywhere to help with http:// trouble
   //If you get a forbidden error, go back to the demo website to get access again. It's a whole thing...
   
   //Pulling URL for musixmatch API
   const rootURL =`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/`;

   const [songData, setSongData] = useState([]); 
   const [country, setCountry] = useState("US");


   const getTracks = `${rootURL}chart.tracks.get?chart_name=top&page=1&page_size=5&${country}=it&f_has_lyrics=1?apikey=${my_key}`; 


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
     }, []);

    const 
    { 
        tracks, 
        songOne, 
        songTwo, 
        songThree, 
        artistOne,
        artistTwo,
        artistThree,
        albumIdOne,
        albumIdTwo,
        albumIdThree, 
    } = useMemo(() => {
        return { 
            tracks: songData.track_list, 
            songOne: songData.track_list && songData.track_list[0].track.track_name, 
            songTwo: songData.track_list && songData.track_list[1].track.track_name, 
            songThree: songData.track_list && songData.track_list[2].track.track_name,
            artistOne: songData.track_list && songData.track_list[0].track.artist_name,
            artistTwo: songData.track_list && songData.track_list[1].track.artist_name,
            artistThree: songData.track_list && songData.track_list[2].track.artist_name,
            albumIdOne: songData.track_list && songData.track_list[0].track.album_id, 
            albumIdTwo: songData.track_list && songData.track_list[1].track.album_id,
            albumIdThree:songData.track_list && songData.track_list[2].track.album_id,
        
        }; 
     }, [songData]);

     console.log();

    //Pulling an image based on the song name
    const picURL = `https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/?client_id=${picKey}`;

    const [picData, setPicData] = useState([]); 

    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.unsplash.com/search/photos/?query=${songOne}&client_id=${picKey}`)
        .then(function(response) {
            console.log(response);
            setPicData(response.data);
        })
        .catch((error) => {
            console.log('error', error); 
            setSongData([]);
        });
    }, []);


    return(
        <div className= "wholePage">
            <h1>Hi</h1>
            <SongCard
            tracks = {tracks}
            songOne = {songOne}
            songTwo = {songTwo}
            songThree = {songThree}
            artistOne = {artistOne}
            artistTwo = {artistTwo}
            artistThree = {artistThree}
            />


        </div> 

    );

}

export default ListingOST; 