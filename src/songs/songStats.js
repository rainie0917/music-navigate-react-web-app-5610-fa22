import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
// import {updateSongThunk} from "../services/songs-thunks";
import {createSongThunk, updateSongThunk} from "../services/search-thunks"
import {updateUserThunk} from "../services/users-thunks";
import * as service from "../services/search-service";

const SongStats = ({ song }) => {

  // console.log(song)
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.users)

  // const unLikeASong = async (track) =>{
  //   let whoLikedArr = track.whoLiked.filter(i => i !== currentUser.username)
  //   console.log(whoLikedArr)
  //   dispatch(updateSongThunk([{
  //     artist: track.artist,
  //     realImg: track.realImg,
  //     mbid: track.mbid,
  //     name: track.name,
  //     whoLiked: whoLikedArr,
  //     likes: track.likes - 1,
  //   }, false]))
  //   let likedSongsArr = currentUser.likedSongs.filter(i => i !== track.mbid)
  //   const updatedUser = {
  //     ...currentUser,
  //     likedSongs: likedSongsArr
  //   }
  //   dispatch(updateUserThunk(updatedUser))
  // }

  const likeASong = async (track) => {
    // if user logged in
    if(currentUser != null){
      let songInfo = await service.searchSongInDB(track.mbid)
      // if song in DB, like += 1
      if(songInfo != null){
        let whoLikedArr = JSON.parse(JSON.stringify(track.whoLiked))
        whoLikedArr.push(currentUser.username)
        dispatch(updateSongThunk([{
          // ...track,
          artist: track.artist,
          realImg: track.realImg,
          mbid: track.mbid,
          name: track.name,
          whoLiked: whoLikedArr,
          likes: track.likes + 1,
          // liked: true,
        }, true]))
        let likedSongsArr = JSON.parse(JSON.stringify(currentUser.likedSongs))
        likedSongsArr.push(track.mbid)
        const updatedUser = {
          ...currentUser,
          likedSongs: likedSongsArr
        }
        dispatch(updateUserThunk(updatedUser))
      }
      // if song not in DB, create song in DB
      else{
        dispatch(createSongThunk([{
          artist: track.artist,
          realImg: track.realImg,
          mbid: track.mbid,
          name: track.name,
          whoLiked: [currentUser.username],
          likes: 1,
        }, true]))
        let likedSongsArr = JSON.parse(JSON.stringify(currentUser.likedSongs))
        likedSongsArr.push(track.mbid)
        const updatedUser = {
          ...currentUser,
          likedSongs: likedSongsArr
        }
        dispatch(updateUserThunk(updatedUser))
      }
    }
    else{
      alert("Please log in to like/unlike a song!")
    }
  }

  const unLikeASong = async (track) =>{
    if(currentUser != null) {
      let whoLikedArr = track.whoLiked.filter(i => i !== currentUser.username)
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


  // return (
  //     <div className='col-12 d-flex pt-2 pe-5 justify-content-between'>
  //       <div>
  //         {
  //             song.liked && currentUser &&
  //             <button
  //                 onClick={() => unLikeASong(song)}
  //                 // onClick={() => dispatch(updateSongThunk([{
  //                 //   ...song,
  //                 //   likes: song.likes - 1,
  //                 // }, false]))}
  //                 className='btn btn-sm'>
  //               {/*<i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.whoLiked.length}*/}
  //               <i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.likes}
  //             </button>
  //         }
  //         {/*console.log(song.whoLiked.length)*/}
  //         {
  //             song.liked && !currentUser &&
  //             <button
  //                 // onClick={alert("Please Login")}
  //                 className='btn btn-sm'>
  //               {/*<i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.whoLiked.length}*/}
  //               <i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.likes}
  //             </button>
  //         }
  //
  //         {
  //             !song.liked && currentUser &&
  //             <button
  //                 onClick={() => dispatch(updateSongThunk({
  //                   ...song,
  //                   likes: typeof song.likes === 'undefined' ? 1: song.likes + 1,
  //                   liked: true
  //                 }))}
  //                 className='btn btn-sm'>
  //               {/*<i className='fa-regular fa-heart'/> {song.whoLiked.length}*/}
  //               <i className='fa-regular fa-heart'/> {song.likes}
  //             </button>
  //         }
  //
  //         {
  //             !song.liked && !currentUser &&
  //             <button
  //                 // onClick={alert("Please Login")}
  //                 className='btn btn-sm'>
  //               {/*<i className='fa-regular fa-heart'/> {song.whoLiked.length}*/}
  //               <i className='fa-regular fa-heart'/> {song.likes}
  //             </button>
  //         }
  //
  //
  //       </div>
  //     </div>
  // )

  return (
      <div className='col-12 d-flex pt-2 pe-5 justify-content-between'>
        <div>
          {
              song.liked && currentUser &&
              <button
                  onClick={() => unLikeASong(song)}
                  className='btn btn-sm'>
                <i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.likes}
              </button>
          }

          {
              song.liked && !currentUser &&
              <button
                  // onClick={alert("Please Login")}
                  className='btn btn-sm'>
                {/*<i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.whoLiked.length}*/}
                <i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.likes}
              </button>
          }

          {
              !song.liked && currentUser &&
              <button
                  onClick={() => dispatch(updateSongThunk({
                    ...song,
                    likes: typeof song.likes === 'undefined' ? 1: song.likes + 1,
                    liked: true
                  }))}
                  className='btn btn-sm'>
                {/*<i className='fa-regular fa-heart'/> {song.whoLiked.length}*/}
                <i className='fa-regular fa-heart'/> {song.likes}
              </button>
          }

          {
              !song.liked && !currentUser &&
              <button
                  // onClick={alert("Please Login")}
                  className='btn btn-sm'>
                {/*<i className='fa-regular fa-heart'/> {song.whoLiked.length}*/}
                <i className='fa-regular fa-heart'/> {song.likes}
              </button>
          }


        </div>
      </div>
  )






};

export default SongStats;