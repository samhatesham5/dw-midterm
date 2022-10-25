import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'; 
import { useMemo } from 'react'; 
import { useParams } from 'react-router'; 
import axios from 'axios'; 
import { my_key }  from '../my_key.js';
import { picKey } from '../my_key.js'; 
import SongCard from '../components/SongCard.js'; 
import Header from '../components/Header.js'; 
import Landing from '../components/Landing.js';

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
        artists,
        tracks,
        songOne, 
        songTwo, 
        songThree, 
        artistOne,
        artistTwo,
        artistThree,
    } = useMemo(() => {
        return { 
            songOne: songData.track_list && songData.track_list[0].track.track_name, 
            songTwo: songData.track_list && songData.track_list[1].track.track_name, 
            songThree: songData.track_list && songData.track_list[2].track.track_name,
            artistOne: songData.track_list && songData.track_list[0].track.artist_name,
            artistTwo: songData.track_list && songData.track_list[1].track.artist_name,
            artistThree: songData.track_list && songData.track_list[2].track.artist_name,
            tracks: songData.track_list && [songData.track_list[0].track.track_name, songData.track_list[1].track.track_name, songData.track_list[2].track.track_name], 
            artists:songData.track_list && [songData.track_list[0].track.artist_name, songData.track_list[1].track.artist_name, songData.track_list[2].track.artist_name],
        }; 
     }, [songData]);


    //Pulling an image based on the song name
    const picURL = `https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/?client_id=${picKey}`;

    const [picOneData, setPicData] = useState([]); 
    const [picTwoData, setTwoData ] = useState([]);
    const [picThreeData, setThreeData ] = useState([]);

     //Quering the data from the API for each song (Basically assessing different photos depending on song name)
    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.unsplash.com/search/photos/?query=${songOne}&client_id=${picKey}`)
        .then(function(response) {
            console.log(response);
            setPicData(response.data.results);
        })
        .catch((error) => {
            console.log('error', error); 
            setPicData([]);
        })
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.unsplash.com/search/photos/?query=${songTwo}&client_id=${picKey}`)
        .then(function(response) {
            console.log([response]);
            setTwoData(response.data.results);
        })
        .catch((error) => {
            console.log('error', error); 
            setTwoData([]);
        })
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.unsplash.com/search/photos/?query=${songThree}&client_id=${picKey}`)
        .then(function(response) {
            console.log([response]);
            setThreeData(response.data.results);
        })
        .catch((error) => {
            console.log('error', error); 
            setThreeData([]);
        });

    }, []);

    //Storing picture values 

    const { picOne } = useMemo(()=> {
        return {
            picOne: picOneData[0] && picOneData[0].urls.small,

        };

    }, [picOneData]);

    const { picTwo } = useMemo(() => {
        return{
            picTwo: picTwoData[0] && picTwoData[1].urls.small,
        };
    }, [picTwoData]);

    const { picThree } = useMemo (() =>  {
        return {
            picThree: picThreeData[0] && picThreeData[2].urls.small,
        };
    }, [picThreeData])


    return(
        <div className= "wholePage">
            <Header/>
            <Landing/>
            <div className= "everyCard"> 
                <SongCard 
                    song = {songOne}
                    artist = {artistOne}
                    picture = {picOne}
                />
                <SongCard 
                    song = {songTwo}
                    artist = {artistTwo}
                    picture = {picTwo}
                />
                <SongCard 
                    song = {songThree}
                    artist = {artistThree}
                    picture = {picThree}
                />
         </div>

        </div> 

    );

}

export default ListingOST; 
