import React from "react";
// import albumsArray from '../songs/songs.json';
import SongsList from "../songs/songList.js";
import {useSelector} from "react-redux";
// import { configureStore }
//   from '@reduxjs/toolkit';
import DisplayUserToAnonynous from "../profile/display-users-to-anonynous";
import UserLikedSongForHome from "../profile/user-liked-songs-for-homepage";


const HomeComponent = () => {

  // const {currentUser} = useSelector((state) => state.users)
  // if (currentUser) {
  //   return (
  //       <ul className="list-group">
  //         <div className="ms-3">
  //           <h2 className="d-flex text-primary fw-bold mb-2">Songs You Liked</h2>
  //         </div>
  //         <UserLikedSongForHome/>
  //         <div className="p-0 ms-3">
  //         </div>
  //       </ul>
  //   )
  // }
  return (

      <ul className="list-group">
        <div className= "ms-3">
          <h2 className="d-flex text-primary fw-bold mb-2">Listen Now</h2>
        </div>
        <SongsList/>
        {/*<UserLikedSongForHome/>*/}
        <div className= "p-0 ms-3">
          {/*<h3>People You Might Interested In</h3>*/}
          <DisplayUserToAnonynous/>

        </div>

      </ul>
  );
}

export default HomeComponent;