
import React, {useEffect} from 'react';
import songs from '../songs/songs.json';
import SongItem from './song-item.js';
import { useDispatch,useSelector } from 'react-redux';
import {findSongsThunk}
  from "../services/songs-thunks";


const SongsList = () => {
  // const songs = useSelector((state) => state.songs);
  const {songs, loading} = useSelector(
      state => state.songsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findSongsThunk())
  }, [])

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