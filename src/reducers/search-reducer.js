import {createSlice} from "@reduxjs/toolkit";
import {getDetailsThunk, searchTrackThunk} from "../services/search-thunks";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		title: "",
		tracks: [],
		mbid: "",
		detail:[]
	},
	
	// reducers: {
	// 	setMbid(state, action) {
	// 		console.log(action.payload)
	// 		state.mbid = action.payload
	// 	},
	// },
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
				state.detail = action.payload
			},
	},

	// reducers: {
	// 	runSearch(state, action){
	// 		const currentSearch = action.payload
	// 		state.title = currentSearch
	// 		console.log(state.title)
	// 	}
	// },

})

export default searchSlice.reducer;
export const{setMbid} = searchSlice.actions