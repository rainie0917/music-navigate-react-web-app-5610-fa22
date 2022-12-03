import {createSlice} from "@reduxjs/toolkit";
import {searchTrackThunk} from "../services/search-thunks";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		title: "",
		tracks: [],
	},
	extraReducers: {
		[searchTrackThunk.fulfilled]:
			(state, action) => {
				const currentSearch = action.payload.title
				state.title = currentSearch
				// console.log(currentSearch)
				// state.search = currentSearch
				state.tracks = action.payload.results.trackmatches.track
			}
	},
	reducers: {
		runSearch(state, action){
			const currentSearch = action.payload
			state.title = currentSearch
			console.log(state.title)
		}
	},

})

export default searchSlice.reducer;
export const{runSearch} = searchSlice.actions