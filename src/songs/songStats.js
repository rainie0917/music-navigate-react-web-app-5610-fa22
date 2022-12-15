import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {updateSongThunk} from "../services/songs-thunks"
import {updateUserThunk} from "../services/users-thunks";
import * as service from "../services/search-service";

const SongStats = ({ song }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.currentUser)
  
  const unLikeASong = async (track) =>{
      if(currentUser != null) {
          let whoLikedArr = track.whoLiked.filter(i => i !== currentUser.username)
          console.log(whoLikedArr)
          dispatch(updateSongThunk([{
              artist: track.artist,
              realImg: track.realImg,
              mbid: track.mbid,
              name: track.name,
              whoLiked: whoLikedArr,
              likes: track.likes - 1,
          }, false]))
          let likedSongsArr = currentUser.likedSongs.filter(i => i !== track.mbid)
          const updatedUser = {
              ...currentUser,
              likedSongs: likedSongsArr
          }
          dispatch(updateUserThunk(updatedUser))
      }
      else{
          alert("Please log in to like/unlike a song!")
      }

  }
  
  const likeASong = async (track) => {
    // if user logged in
    if(currentUser != null){
        let whoLikedArr = JSON.parse(JSON.stringify(track.whoLiked))
        whoLikedArr.push(currentUser.username)
        dispatch(updateSongThunk([{
          artist: track.artist,
          realImg: track.realImg,
          mbid: track.mbid,
          name: track.name,
          whoLiked: whoLikedArr,
          likes: track.likes + 1,
        }, true]))
        let likedSongsArr = JSON.parse(JSON.stringify(currentUser.likedSongs))
        likedSongsArr.push(track.mbid)
        const updatedUser = {
          ...currentUser,
          likedSongs: likedSongsArr
        }
        dispatch(updateUserThunk(updatedUser))
    }
    else{
      alert("Please log in to like/unlike a song!")
    }
    
  }
  return (
      <div className='col-12 d-flex pt-2 pe-5 justify-content-between'>
          <div>
              {/*unlike a song*/}
              {song.likedByCurrentUser && <i onClick={() => unLikeASong(song)}
                                              className="fa-solid fa-heart  fs-6 text-danger"/>}
              {/*likes a song*/}
              {!song.likedByCurrentUser && <i onClick={() => likeASong(song)}
                                               className="fa-regular fa-heart  fs-6 fw-light"/>}
              {song.likes}
          </div>
      </div>




  );
};

export default SongStats;