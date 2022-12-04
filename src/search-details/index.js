import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useSelector} from "react-redux";


const DetailComponent = () => {
	const detail = useSelector(state => state.search.detail)
	console.log(detail)
	
	return(
		<>
			<div className="bg-dark bg-opacity-50">
				<br/><br/>
				<div className="ps-5">
					<h5 className="text-white">
						{detail.track.artist.name}
					</h5>
					<h2>
						{detail.track.name}
					</h2>
				</div>
				<br/><br/>
				<span>
					<img width={80} className="rounded-3" src={`${detail.track.album.image[3]}`}/>
				</span>
			</div>

			
			

		</>
	)
}

export default DetailComponent