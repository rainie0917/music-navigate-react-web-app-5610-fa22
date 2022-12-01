import React from "react";
import albumsArray from '../albums/albums.json';
import AlbumList from "../albums/albumList.js";

const HomeComponent = () => {
  return (

      <ul className="list-group">
        <div className= "p-0">
          <h2>Listen Now</h2>
        </div>
        {/*{*/}
        {/*  albumsArray.map(album =>*/}
        {/*      <AlbumList*/}
        {/*          key={album.album_id} album={album}/>)*/}
        {/*}*/}
        <AlbumList/>

      </ul>
  );
}

export default HomeComponent;