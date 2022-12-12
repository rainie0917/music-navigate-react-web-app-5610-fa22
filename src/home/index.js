import React from "react";
// import albumsArray from '../songs/songs.json';
import SongsList from "../songs/songList.js";
// import { configureStore }
//   from '@reduxjs/toolkit';


const HomeComponent = () => {
  return (

      <ul className="list-group">
        <div className= "p-0 ms-3">
          <h2>Listen Now</h2>
        </div>
        {/*{*/}
        {/*  albumsArray.map(album =>*/}
        {/*      <AlbumList*/}
        {/*          key={album.album_id} album={album}/>)*/}
        {/*}*/}
          <SongsList/>

      </ul>
  );
}

export default HomeComponent;