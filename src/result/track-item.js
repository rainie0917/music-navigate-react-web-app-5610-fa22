import {useDispatch} from "react-redux";

const TrackItem = ({track: track}) => {
	const dispatch = useDispatch();
	
	return(
		<li className="list-group-item">
			<div className="row">
				<div className="col-10">
					 {track.name} by {track.artist}
					<br/>

					<i className="fa-regular fa-heart  fs-6 fw-light"></i> Click to like
				</div>
				
				<div className="col-2">
					<img width={70} className="float-end rounded-3" src={`${track.realImg}`}/>
				</div>

			</div>
		</li>
	)
}

export default TrackItem