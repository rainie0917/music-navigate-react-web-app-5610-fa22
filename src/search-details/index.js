import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useSelector} from "react-redux";
import "./index.css"


const DetailComponent = () => {
	const detail = useSelector(state => state.search.detail)
	console.log(detail)

	const getTags = (toptag) => {
		
		let tags = ""
		for(var i in toptag){
			// eslint-disable-next-line no-restricted-globals
			tags += toptag[i].name
			tags += ", "
		}
		tags = tags.slice(0, tags.length - 2)
		return tags
	}
	
	const getSummaryContent = (text) => {
		let content = text.split("<a")
		return content[0]
	}
	
	return(
		<>
			<div className="bg-dark bg-opacity-50 wd-pos-relative">
				<br/><br/>
				<div className="ps-5">
					<h2>
						{detail.track.name}
					</h2>
					
					<h5 className="">
						By {detail.track.artist.name}
					</h5>

					<h5 className="">
						From 《{detail.track.album.title}》
					</h5>
				</div>
				<br/><br/>
				
				<div className="wd-image-pos">
					<img width={140} className="" src={`${detail.track.album.image[3]["#text"]}`}/>
				</div>
			</div>
			<br/><br/><br/><br/>
			
			<ul className="list-group">
				<li className="list-group-item">
					<span className="fw-bold">
						mbid
					</span>
					<span className="float-end">
						{detail.track.mbid}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Name
					</span>
					<span className="float-end">
						{detail.track.name}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Artist
					</span>
					<span className="float-end">
						{detail.track.artist.name}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Album
					</span>
					<span className="float-end">
						{detail.track.album.title}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Published
					</span>
					<span className="float-end">
						{detail.track.wiki.published}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Playcount
					</span>
					<span className="float-end">
						{detail.track.playcount}
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
						{getSummaryContent(detail.track.wiki.summary)}
					</span>
				</li>
				
				<li className="list-group-item">
					<span className="fw-bold">
						Content
					</span>
					<span className="float-end">
						{getSummaryContent(detail.track.wiki.content)}
					</span>
				</li>
				

				

				

			</ul>

			
			

		</>
	)
}

export default DetailComponent