import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "search",
	initialState: {
		search: ""
	},
	reducers: {
		runSearch(state, action){
			const currentSearch = action.payload
			state.search = currentSearch
			// console.log(state.search)
		}
	},

})

export default searchSlice.reducer;
export const{runSearch} = searchSlice.actions