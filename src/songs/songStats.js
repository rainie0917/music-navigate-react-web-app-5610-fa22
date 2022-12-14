import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {updateSongThunk} from "../services/songs-thunks";

const SongStats = ({ song }) => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.users)

  return (
      <div className='col-12 d-flex pt-2 pe-5 justify-content-between'>
        <div>
          {
              song.liked && currentUser &&
              <button
                  onClick={() => dispatch(updateSongThunk({
                    ...song,
                    likes: song.likes - 1,
                    liked: false
                  }))}
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