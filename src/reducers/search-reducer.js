import {createSlice} from "@reduxjs/toolkit";
import {
	createSongThunk,
	getDetailsThunk,
	searchSongThunk,
	updateSongThunk
} from "../services/search-thunks";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		title: "",
		tracks: [],
		mbid: "",
		currentTrack:{},
		loading: false
	},
	
	extraReducers: {
		[searchSongThunk.pending]:
			(state, action) => {
				state.loading = true
			},
		[searchSongThunk.fulfilled]:
			(state, action) => {
				state.loading = false
				const currentSearch = action.payload.title
				state.title = currentSearch

				state.tracks = action.payload.results.trackmatches.track
			},
		[getDetailsThunk.fulfilled]:
			(state, action) => {
				state.currentTrack = action.payload
			},
		[createSongThunk.fulfilled]:
			(state, action) => {
				const trackIdx = state.tracks.findIndex((t) => t.mbid === action.payload.mbid)
				state.tracks[trackIdx] = {
					...state.tracks[trackIdx],
					...action.payload
				}
			},
		[updateSongThunk.fulfilled]:
			(state, action) => {
				const trackIdx = state.tracks.findIndex((t) => t.mbid === action.payload.mbid)
				state.tracks[trackIdx] = {
					...state.tracks[trackIdx],
					...action.payload
				}
				console.log("update")
			}
	},

})

export default searchSlice.reducer;
export const{setMbid} = searchSlice.actions