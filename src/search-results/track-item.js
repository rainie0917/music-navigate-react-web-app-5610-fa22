import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {setMbid} from "../reducers/search-reducer";
import {getDetailsThunk} from "../services/search-thunks";

const TrackItem = ({track: track}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const getDetails = () => {
		navigate(`/details/${track.mbid}`);
		// dispatch(setMbid(track.mbid))
		dispatch(getDetailsThunk(track.mbid))
	}
	
	
	return(
		<li className="list-group-item">
			<div className="row">
				<div className="col-2">
					<img width={40} className="rounded-3" src={`${track.realImg}`}/>
					<span className="ps-3">
						<i className="fa-regular fa-heart  fs-6 "></i>
					</span>
				</div>
				
				<div className="col-6">
					<span
					onClick={getDetails}
					className="fw-bold">
						{track.name}
					</span>
				</div>
				
				<div className="col-4 text-end">
					{track.artist}
				</div>
				

			</div>
		</li>
	)
}

export default TrackItem