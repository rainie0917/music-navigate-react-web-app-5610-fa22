import React from "react";
import {useDispatch } from 'react-redux';
// import PictureSummary from './picture-summary';

import {likeSong} from "../reducers/songs-reducer";
import SongStats from "../songs/songStats";

const SongItem =  ({song}) => {
  const dispatch = useDispatch();
  const likeSongHandler = (song) => {
    dispatch(likeSong(song));
  }

  return (
      <>
        <div className="rounded row m-0 ps-2 pe-2 pt-2 pb-2">
          <div className="col-2 justify-content-center">
            <div><img alt="icon" className="rounded-circle wd-avatar" src={song.icon} height="60px"/></div>
          </div>

          <div className="col-9 row ms-2">

            <div className="col-5 mb-2">
              <div className="fw-bold">
                {song.musicName}

                <span className="px-2 fs-6 fw-normal">
                  {song.playerName}
                </span>

              </div>
              <div className="text-muted">{song.AlbumName}</div>
              <div>{song.content}</div>
            </div>
            {/*<PictureSummary song={song}/>*/}

            <div className="d-flex">
               <SongStats song={song} />
                <div className="btn btn-primary m-1">Play</div>

                <div className="btn btn-primary m-1">Detail</div>

            </div>
          </div>
        </div>
        <hr/>
      </>
  );
};
export default SongItem;