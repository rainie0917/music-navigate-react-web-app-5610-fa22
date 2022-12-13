import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router";
import SongStats from "../songs/songStats";
import {getDetailsThunk} from "../services/search-thunks";

const SongItem =  ({song}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const search = useSelector((state) => state.search);
  // const detail = search.currentTrack
  //
  // console.log(search)
  // console.log(detail)

  const getDetails = async (mbid) => {
    console.log(mbid)
    await dispatch(getDetailsThunk(mbid))
    navigate(`/details/${mbid}`);
  }

  // console.log(song)
  return (
      <>
        <div className="rounded row m-0 ps-2 pe-2 pt-2 pb-2">
          <div className="col-2 justify-content-center">
            <div><img alt="icon" className=" wd-avatar" src={song.image} height="100px"/></div>
          </div>

          <div className="col-9 row">

            <div className="col-7 mb-2">
              <div className="fw-bold">
                {song.name}

                <span className="px-2 fs-6 fw-normal">
                  {song.artist}
                </span>

              </div>
              <div className="text-muted">{song.album}</div>
              {/*<div>{song.content}</div>*/}
            </div>

            <div className="d-flex">
               <SongStats song={song} />
              {/*OnClick={()=> getDetails(mbid)}*/}
              <button onClick={() => getDetails(song.mbid)} className="btn btn-primary m-1">Detail</button>
              <button className="btn btn-primary m-1">Play</button>

            </div>
          </div>
        </div>
        <hr/>
      </>
  );
};
export default SongItem;