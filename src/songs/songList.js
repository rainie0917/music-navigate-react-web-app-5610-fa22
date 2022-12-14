
import React, {useEffect} from 'react';
import songs from '../songs/songs.json';
import SongItem from './song-item.js';
import { useDispatch,useSelector } from 'react-redux';
import {findSongsThunk}
  from "../services/songs-thunks";


const SongsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findSongsThunk())  // fx
  }, [])
  
  const {songs, loading} = useSelector(
      state => state.songsData)
  
  return (
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item">
              loading...
            </li>
        }
        {songs.map((song) => (
            <SongItem
                // song={song}
                key={song._id}
                song={song}
            />
        ))}
      </ul>

  );
};
export default SongsList;