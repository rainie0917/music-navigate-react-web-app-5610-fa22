import { createSlice } from "@reduxjs/toolkit";
import songs from '../songs/songs.json';
import {findSongsThunk,updateSongThunk}
  from "../services/songs-thunks";

const initialState = {
  songs: [],
  loading: false
}

// const currentSong = {
//   "musicName": "NASA",
//   "image": "https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg",
// };
//
// const templateSong = {
//   ...currentSong,
//
//   "liked": false,
//   "likes": 0,
// }

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  extraReducers: {
    [findSongsThunk.pending]:
        (state) => {
          state.loading = true
          state.songs = []
        },
    [findSongsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.songs = payload
        },
    [findSongsThunk.rejected]:
        (state) => {
          state.loading = false
        },
    [updateSongThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const songNdx = state.songs
          .findIndex((s) => s._id === payload._id)
          state.songs[songNdx] = {
            ...state.songs[songNdx],
            ...payload
          }
  },



  reducers: {
    // likeSong(state, action) {
    //   const index = state.findIndex(song => song.id === action.payload.id);
    //   state[index].liked = true;
    //   state[index].likes += 1;
    // },
    // // unlikeSong(state, action) {
    // //   const index = state.findIndex(song => song._id === action.payload._id);
    // //   state[index].liked = false;
    // //   state[index].likes -= 1;
    // // },
    // unlikeSong(state, action) {
    //   const index = state.findIndex(song => song.id === action.payload.id);
    //   state[index].liked = false;
    //   state[index].likes -= 1;
    }
  }
});

export const {
  likeSong,
  unlikeSong,
} = songsSlice.actions;

export default songsSlice.reducer;

