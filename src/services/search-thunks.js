import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./search-service"


export const searchSongThunk = createAsyncThunk(
	'search',
	async(title, {getState, requestId}) =>{
		const data = await service.searchSongs(title)
		const state = getState();
		const currentUser = state.users.currentUser
		
		data.title = title;
		const tracks = data.results.trackmatches.track.filter(track => track.mbid != "")
		
		for (let track of tracks) {
			let songInfo = await service.searchSongInDB(track.mbid)
			// if track is in the DB, get details from DB
			if(songInfo != null){
				// if currentUser is in son
				track.name = songInfo.name
				track.whoLiked = songInfo.whoLiked
				track.likes = songInfo.likes
				track.album = songInfo.album
				track.realImg = songInfo.realImg
				track.likedByCurrentUser =  false
				if(currentUser != null && songInfo.whoLiked.indexOf(currentUser.username) > -1){
					track.likedByCurrentUser = true
				}
				
			}
			// if track is not in the DB, get details from API call
			else{
				songInfo = await service.searchSongInfo(track.mbid)
				try{
					track.realImg = songInfo.track.album.image[3]["#text"];
				} catch (e) {
					track.realImg = "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
				}
				
				if (track.realImg === "") {
					track.realImg = "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
				}
				track.likedByCurrentUser =  false
				track.likes = 0
			}
		}
		data.results.trackmatches.track = tracks;
		return data
	}
)

export const getDetailsThunk = createAsyncThunk(
	'details',
	async(mbid) =>{
		const data = await service.searchSongInfo(mbid)
		const DBInfo = await service.searchSongInDB(mbid)
		if(DBInfo != null){
			data.userNames = DBInfo.whoLiked
		}
		else{
			data.userNames = ["Be the first one who likes this song!"]
		}
		return data
	}
)

export const updateSongThunk = createAsyncThunk(
	'update',
	async(arr) => {
		const data = await service.updateSong(arr)
		return data
	}
)

export const createSongThunk = createAsyncThunk(
	'create',
	async (arr) => {
		const data = await service.createSong(arr)
		return data
	}
)
