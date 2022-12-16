import React from "react";
import SongsList from "../songs/songList.js";
import {useDispatch,useSelector} from "react-redux";
// import { configureStore }
//   from '@reduxjs/toolkit';
import DisplayUserToAnonynous from "../profile/display-users-to-anonynous";
import UserLikedSongForHome from "../profile/user-liked-songs-for-homepage";
import {logoutThunk} from "../services/users-thunks";


const HomeComponent = () => {

  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.users)
  const handleLogout = () => {
    dispatch(logoutThunk())
  }
  if (currentUser) {
    return (
        <ul className="list-group">
          <div className= "ms-3">
            <h2 className="d-flex text-primary fw-bold mb-2">Listen Now</h2>
          </div>
          <SongsList/>
          <div className="ms-3">
            <h2 className="d-flex text-primary fw-bold mb-2">Songs You Liked</h2>
          </div>
          <UserLikedSongForHome/>
          <div className="p-0 ms-2 pt-5">
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        </ul>
    )
  }else{
  return (
      <ul className="list-group">
        <div className= "ms-3">
          <h2 className="d-flex text-primary fw-bold mb-2">Listen Now</h2>
        </div>
        <SongsList/>
        <div className= "p-0 ms-3">
          <DisplayUserToAnonynous/>

        </div>

      </ul>
  );
}
}

export default HomeComponent;