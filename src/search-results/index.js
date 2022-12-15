import React, {useEffect} from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch, useSelector} from "react-redux";
import TrackItem from "./track-item";
import {searchSongThunk} from "../services/search-thunks";


const ResultComponent = () => {
	const search = useSelector(state => state.search)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(searchSongThunk())
	}, [])
	const loading = useSelector(state => state.search.loading)
	return(
		<>
				<h2>Search result for "{search.title}"</h2>
				<ul className="list-group">
					{
						loading &&
						<li className="list-group-item">
							Loading...
						</li>
					}
					
				{ !loading &&
					search.tracks.map(track =>
					<TrackItem key={track.url} track={track} >
					</TrackItem>)
				}
				</ul>

		</>
	)
}

export default ResultComponent