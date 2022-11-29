import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useSelector} from "react-redux";

const ResultComponent = () => {
	const search = useSelector(state => state.search)
	// console.log(search)
	
	return(
		<>
			<div>
				{search.search}
			</div>
		</>
	)
}

export default ResultComponent