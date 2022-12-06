import {createSlice} from "@reduxjs/toolkit";
import {getDetailsThunk, searchTrackThunk} from "../services/search-thunks";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		title: "",
		tracks: [],
		mbid: "",
		currentTrack:{},
	},
	
	extraReducers: {
		[searchTrackThunk.fulfilled]:
			(state, action) => {
				const currentSearch = action.payload.title
				state.title = currentSearch
				// console.log(currentSearch)
				// state.search = currentSearch
				state.tracks = action.payload.results.trackmatches.track
			},
		[getDetailsThunk.fulfilled]:
			(state, action) => {
				state.currentTrack = action.payload
				// console.log(state.detail)
			},
	},

})

export default searchSlice.reducer;
export const{setMbid} = searchSlice.actions