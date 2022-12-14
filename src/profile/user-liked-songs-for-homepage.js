import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useMemo, useState} from "react";
import {getDetailsThunk} from "../services/search-thunks";
import {useNavigate} from "react-router";
import * as service from "../services/search-service"
import SongStats from "../songs/songStats";
import SongItem from '../songs/song-item.js';
import {logoutThunk} from "../services/users-thunks";

const UserLikedSongForHome = () => {
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutThunk())
  }

  const search = useSelector(state => state.search)
  const detail = search.currentTrack

  const [likedsongsData, setLikedsongsData] = useState([])
  useEffect(()=>{
    const tasks = []
    for (let i = 0; i < currentUser.likedSongs.length; i++) {
      const mbid = currentUser.likedSongs[i]
      tasks.push(service.searchSongInfo(mbid))
      console.log(likedsongsData)
    }
    Promise.all(tasks).then((res) => {
      setLikedsongsData(res)
    })
  },[currentUser.likedSongs])

  const getDetails = async (mbid) => {
    await dispatch(getDetailsThunk(mbid))
    navigate(`/details/${mbid}`);
  }


  return(
      <>
        <div className="rounded row m-0 ps-2 pe-2 pt-2 pb-2">
          {/*<div className="col-2 justify-content-center">*/}
          {/*  likedsongsData.map((likedSong) =>*/}
          {/*  <li className="list-group-item" key={likedSong.track.mbid}>*/}
          {/*    <div><img alt="icon" className=" wd-avatar" src={likedSong.track.realImg} height="100px"/></div>*/}
          {/*  </li>*/}
          {/*</div>*/}
          <ul className="list-group list-group-flush">
            {
              likedsongsData.map((likedSong) =>
                  <li className="list-group-item" key={likedSong.track.mbid}>
                    <div className="fw-bold">{likedSong.track.name}
                      <span className="px-2 fs-6 fw-normal">
                      {likedSong.track.artist.name}
                      </span>
                    </div>
                    <div><img alt="icon" className=" wd-avatar" src={likedSong.track.album.image[3]["#text"]} height="100px"/>
                      <span>
                        <button className="btn btn-primary m-1 float-end" onClick={() => getDetails(likedSong.track.mbid)}>Detail</button>
                        <button className="btn btn-primary m-1 float-end">Play</button></span>
                    </div>
                  </li>
              )
            }
          </ul>
          {/*<div className="float-end mt-5">*/}
          {/*  <button className="btn btn-danger position-absolute end-0" onClick={handleLogout}>Logout</button>*/}
          {/*</div>*/}
        </div>
      </>
  )
}

export default UserLikedSongForHome