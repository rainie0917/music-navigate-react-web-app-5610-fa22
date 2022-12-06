import React, {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useSelector} from "react-redux";
import "./index.css"
import {useNavigate} from "react-router";


const DetailComponent = () => {
	const detail = useSelector(state => state.search.detail)
	console.log(detail)
	
	const search = useSelector(state => state.search)
	const [currentSearch, setCurrentSearch] = useState(search)
	
	const navigate = useNavigate();

	const getTags = (toptag) => {
		if(toptag === undefined || toptag.length === 0){
			return "n/a"
		}
		let tags = ""
		for(var i in toptag){
			// eslint-disable-next-line no-restricted-globals
			tags += toptag[i].name
			tags += ", "
		}
		tags = tags.slice(0, tags.length - 2)
		return tags
	}
	
	const getSummary = (wiki) => {
		if(wiki === undefined){
			return "n/a"
		}
		let summary = wiki.summary.split("<a")
		return summary[0]
	}
	
	const getContent = (wiki) => {
		if(wiki === undefined){
			return "n/a"
		}
		let content = wiki.content.split("<a")
		return content[0]
	}
	
	const getPublished = (wiki) => {
		if(wiki === undefined){
			return "n/a"
		}
		let published = wiki.published
		return published
	}
	
	const removeUndefined = (text) => {
		if(text === undefined){
			return "n/a"
		}
		return text
	}
	
	const back = () => {
		navigate(`/search/${currentSearch}`);
	}
	
	return(
		<>
			<div className="bg-primary bg-opacity-50 wd-pos-relative">
				<div className="btn rounded-pill btn-primary fs-6 ms-2 mt-2"
					onClick={back}>
					Back to result page
				</div>
				
				<br/><br/>

				<div className="ps-5">
					<h2>
						{removeUndefined(detail.track.name)}
					</h2>
					
					<h5 className="">
						By {removeUndefined(detail.track.artist.name)}
					</h5>

					<h5 className="">
						From 《{removeUndefined(detail.track.album.title)}》
					</h5>
				</div>
				<br/><br/>
				
				<div className="wd-image-pos">
					<img width={160} className="" src={`${detail.track.album.image[3]["#text"]}`}/>
				</div>
			</div>
			<br/><br/><br/><br/>
			
			<ul className="list-group">
				<li className="list-group-item">
					<span className="fw-bold">
						mbid
					</span>
					<span className="float-end">
						{removeUndefined(detail.track.mbid)}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Name
					</span>
					<span className="float-end">
						{removeUndefined(detail.track.name)}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Artist
					</span>
					<span className="float-end">
						{removeUndefined(detail.track.artist.name)}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Album
					</span>
					<span className="float-end">
						{removeUndefined(detail.track.album.title)}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Published
					</span>
					<span className="float-end">
						{getPublished(detail.track.wiki)}
						{/*{removeUndefined(detail.track.wiki.published)}*/}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Playcount
					</span>
					<span className="float-end">
						{removeUndefined(detail.track.playcount)}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Toptag
					</span>
					<span className="float-end">
						{getTags(detail.track.toptags.tag)}
						{/*{detail.track.toptags.tag.name}*/}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Summary
					</span>
					<span className="float-end">
						{getSummary(detail.track.wiki)}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Content
					</span>
					<span className="float-end">
						{getContent(detail.track.wiki)}
					</span>
				</li>
				

				

				

			</ul>

			
			

		</>
	)
}

export default DetailComponent