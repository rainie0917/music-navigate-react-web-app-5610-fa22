import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useSelector} from "react-redux";
import TrackItem from "./track-item";


const ResultComponent = () => {
	const search = useSelector(state => state.search)
	
	return(
		<>
				<h2>Search result for "{search.title}"</h2>
				<ul className="list-group">
				{
					search.tracks.map(track =>
					<TrackItem key={track.url} track={track} >
					</TrackItem>)
				}
				</ul>

		</>
	)
}

export default ResultComponent