import axios from "axios";
const SONG_API_URL = 'http://localhost:4000/api/songs'
const SONGS_API_URL = 'http://localhost:4000/songs'
// const BASE_API_URL = 'http://localhost:4000'
// const api = axios.create({withCredentials: true});

export const findSongs = async () => {
  const response = await axios.get(SONG_API_URL);
  const songs = response.data;
  return songs;
}

export const updateSong = async (song) => {
  const response = await axios
  .put(`${SONG_API_URL}/${song._id}`, song);
  // return response.data;
  return song;
}







