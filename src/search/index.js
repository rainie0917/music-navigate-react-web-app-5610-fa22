import React, {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import "./index.css";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {runSearch} from "../reducers/search-reducer";
import {searchTrackThunk} from "../services/search-thunks";

const SearchComponent = () => {
	const search = useSelector(state => state.search)
	const [currentSearch, setCurrentSearch] = useState(search)
	const navigate = useNavigate();
	const dispatch = useDispatch();
	
	const searchSongs = () =>{
		// dispatch(runSearch(currentSearch))
		dispatch(searchTrackThunk(currentSearch))
		navigate(`/search/${currentSearch}`);
	}
	
	return(
		<>
			{/*Upper space*/}
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			
			<div className="row">
				{/*Left space*/}
				<div className="col-1 col-sm-2 col-md-1 col-lg-2 col-xl-2 col-xxl-2">
				
				</div>
				
				{/*Input bar*/}
				<div className="col-7">
					<div className="position-relative">
						<i className="position-absolute fa-solid fa-magnifying-glass text-secondary"
						   style={{"bottom": "10px", "left": "17px"}}>
						</i>
						
						<input className="ps-5 form-control rounded-pill"
						       onChange={(event) => setCurrentSearch(event.target.value)}
						       placeholder="Search for songs"/>
					</div>
				</div>
				
				{/*Search button*/}
				{/*<div className=" wd-col-customize wd-col-md-customize col-lg-1 col-xl-1 col-xxl-1 btn rounded-pill btn-primary">*/}
					<div className=" wd-col-customize btn rounded-pill btn-primary"
					onClick={searchSongs}>
					Search
				</div>
				
				{/*Right space*/}
				<div className="col-1 col-sm-2 col-md-1 col-lg-2 col-xl-2 col-xxl-2">
				
				</div>
			</div>
			
		</>
	)
}

export default SearchComponent