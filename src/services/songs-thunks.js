import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service
  from "./songs-service"

export const findSongsThunk = createAsyncThunk(
    'songs/findSongs', async () =>
        await service.findSongs()
)

export const updateSongThunk =
    createAsyncThunk(
        'songs/updateSong',
        async (song) =>
         await service.updateSong(song)
    )
