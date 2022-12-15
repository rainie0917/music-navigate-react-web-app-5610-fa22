import {createAsyncThunk} from "@reduxjs/toolkit";
import {searchSongInDB, updateSong} from "./search-service";
import * as service
  from "./songs-service"

export const findSongsThunk = createAsyncThunk(
    'songs/findSongs', async (title,{getState, requestId}) =>{
        const data = await service.findSongs()
        const state = getState();
        const currentUser = state.users.currentUser
        for(let song of data){
            song.likedByCurrentUser =  false
            // if(currentUser === null) console.log("current user is null")
            // if(song.whoLiked.indexOf(currentUser.username) <= 0) {
            //     // console.log("username not in whoLiked")
            //     // console.log(song)
            //     // console.log(song.whoLiked)
            //     // console.log(currentUser.username)
            // }
            if(currentUser != null && song.whoLiked.indexOf(currentUser.username) > -1){
                song.likedByCurrentUser = true
            }
        }
        return data
    }
)

// export const updateSongThunk =
//     createAsyncThunk(
//         'songs/updateSong',
//         async (song) =>
//          await service.updateSong(song)
//     )

export const updateSongThunk = createAsyncThunk(
    'update',
    async(arr) => {
        const data = await updateSong(arr)
        return data
    }
)
