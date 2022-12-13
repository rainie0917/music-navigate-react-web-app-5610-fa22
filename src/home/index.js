import React from "react";
// import albumsArray from '../songs/songs.json';
import SongsList from "../songs/songList.js";
// import { configureStore }
//   from '@reduxjs/toolkit';
import DisplayUserToAnonynous from "../profile/display-users-to-anonynous";


const HomeComponent = () => {
  return (

      <ul className="list-group">
        <div className= "ms-3">
          <h2 className="d-flex text-primary fw-bold mb-2">Listen Now</h2>
        </div>
          <SongsList/>
        <div className= "p-0 ms-3">
          {/*<h3>People You Might Interested In</h3>*/}
          <DisplayUserToAnonynous/>

        </div>

      </ul>
  );
}

export default HomeComponent;