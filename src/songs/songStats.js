import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
// import {updateSongThunk} from "../services/songs-thunks";
import {updateSongThunk} from "../services/search-thunks"
import {updateUserThunk} from "../services/users-thunks";

const SongStats = ({ song }) => {
  console.log(song)
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.users)
  const unLikeASong = async (track) =>{
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

  return (
      <div className='col-12 d-flex pt-2 pe-5 justify-content-between'>
        <div>
          {
              song.liked && currentUser &&
              <button
                  onClick={() => unLikeASong(song)}
                  // onClick={() => dispatch(updateSongThunk([{
                  //   ...song,
                  //   likes: song.likes - 1,
                  // }, false]))}
                  className='btn btn-sm'>
                {/*<i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.whoLiked.length}*/}
                <i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.likes}
              </button>
          }
          {/*console.log(song.whoLiked.length)*/}
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

          {/*{*/}
          {/*    song.liked &&*/}
          {/*    <button*/}
          {/*        onClick={() => dispatch(updateSongThunk({*/}
          {/*          ...song,*/}
          {/*          likes: song.likes - 1,*/}
          {/*          liked: false*/}
          {/*        }))}*/}
          {/*        className='btn btn-sm'>*/}
          {/*      <i className='fa-solid fa-heart  fs-6 text-danger' style={{color: 'red'}}/> {song.likes}*/}
          {/*    </button>*/}
          {/*}*/}

          {/*{*/}
          {/*    !song.liked &&*/}
          {/*    <button*/}
          {/*        onClick={() => dispatch(updateSongThunk({*/}
          {/*          ...song,*/}
          {/*          likes: typeof song.likes === 'undefined' ? 1: song.likes + 1,*/}
          {/*          liked: true*/}
          {/*        }))}*/}
          {/*        className='btn btn-sm'>*/}
          {/*      <i className='fa-regular fa-heart'/> {song.likes}*/}
          {/*    </button>*/}
          {/*}*/}

          {/*cancel like*/}
          {/*{song.liked && <i onClick={() => dispatch(updateSongThunk({*/}
          {/*  ...song,*/}
          {/*  likes: song.likes - 1,*/}
          {/*  liked: false,*/}
          {/*}))}*/}
          {/*                  className="fa-solid fa-heart  fs-6 text-danger"/>}*/}
          {/*/!*likes a tuit*!/*/}
          {/*{!song.liked && <i onClick={() => dispatch(updateSongThunk({*/}
          {/*  ...song,*/}
          {/*  likes: song.likes + 1,*/}
          {/*  liked: true,*/}
          {/*}))}*/}
          {/*                   className="fa-regular fa-heart  fs-6 fw-light"/>}*/}
          {/*<span className="ps-2 "*/}
          {/*      style={{"verticalAlign": "top"}}> {song.likes} </span>*/}

        </div>
      </div>




  );
};

export default SongStats;