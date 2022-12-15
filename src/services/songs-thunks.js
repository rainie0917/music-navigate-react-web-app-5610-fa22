import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service
  from "./songs-service"

// export const findSongsThunk = createAsyncThunk(
//     'songs/findSongs', async () =>
//         await service.findSongs()
// )

export const updateSongThunk =
    createAsyncThunk(
        'songs/updateSong',
        async (song) =>
         await service.updateSong(song)
    )

export const findSongsThunk = createAsyncThunk(
    'songs/findSongs', async (title,{getState}) =>{
      const data = await service.findSongs()
      const state = getState();
      const currentUser = state.users.currentUser
      for(let song of data){
        song.likedByCurrentUser =  false
        if(currentUser != null && song.whoLiked.indexOf(currentUser.username) > -1){
          song.likedByCurrentUser = true
        }
      }
      return data
    }
)
