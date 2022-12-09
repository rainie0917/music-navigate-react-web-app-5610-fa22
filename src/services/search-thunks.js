import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./search-service"
import {searchSongInfo} from "./search-service";

export const searchTrackThunk = createAsyncThunk(
	'search',
	async(title) =>{
		const data = await service.searchTrack(title)

		data.title = title;
		const tracks = data.results.trackmatches.track.filter(track => track.mbid != "")
		for (const track of tracks) {
			const songInfo = await service.searchSongInfo(track.mbid)
			// const likes = await service.getLikes(track.mbid)
			try{
				track.realImg = songInfo.track.album.image[3]["#text"];
			} catch (e) {
				track.realImg = "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
			}
			
			if (track.realImg === "") {
				track.realImg = "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png"
			}
		}
		data.results.trackmatches.track = tracks;
		// console.log(data)
		return data
	}
)

export const getDetailsThunk = createAsyncThunk(
	'details',
	async(mbid) =>{
		const data = await service.searchSongInfo(mbid)
		// console.log(data)
		return data
	}
)